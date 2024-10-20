using Edu_Infinit.Course.Core.Aggregates.Category;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.ValueObjects;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Query;
using System.Linq.Expressions;
using System.Reflection;

namespace Edu_Infinite.Course.Infrastructure.Database
{
	internal class CourseAppDbContext : DbContext
	{
		public DbSet<CourseDefinition> Courses { get; set; }
		public DbSet<CourseCategory> Categories { get; set; }
		public DbSet<CourseContent> Contents { get; set; }
		public DbSet<CourseSection> Sections { get; set; }

      protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
      {
			optionsBuilder.UseSqlServer("Server=.;Database=edu_infinit_db;Trusted_Connection=True;Trust Server Certificate=true");
      }

      protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Ignore<BaseDomainEvent>();
			modelBuilder.Ignore<Blob>();
         base.OnModelCreating(modelBuilder);
			ApplyGlobalFilters(modelBuilder);

			modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
		}
		//TODO:Handle Record Deletion

		private static void ApplyGlobalFilters(ModelBuilder modelBuilder)
		{
			foreach (var entityType in modelBuilder.Model.GetEntityTypes())
			{
				var parameter = Expression.Parameter(entityType.ClrType, "e");
				var body = Expression.Equal(
					 Expression.Call(typeof(EF), nameof(EF.Property), new[] { typeof(bool) }, parameter, Expression.Constant("IsDelete")),
					 Expression.Constant(false));

				modelBuilder.Entity(entityType.ClrType).HasQueryFilter(Expression.Lambda(body, parameter));
			}

		}
	}
}
