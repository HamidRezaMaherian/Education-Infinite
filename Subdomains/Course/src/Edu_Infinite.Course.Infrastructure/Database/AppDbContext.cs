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
	internal class CourseAppDbContext(DbContextOptions<CourseAppDbContext> options) : DbContext(options)
	{
		public DbSet<CourseDefinition> Courses { get; set; }
		public DbSet<CourseCategory> Categories { get; set; }
		public DbSet<CourseContent> Contents { get; set; }
		public DbSet<CourseSection> Sections { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<CourseVideoContent>().HasBaseType<CourseContent>();
			modelBuilder.Entity<CourseDocumentContent>().HasBaseType<CourseContent>();
			modelBuilder.Ignore<BaseDomainEvent>();
			modelBuilder.Ignore<Blob>();
			base.OnModelCreating(modelBuilder);
			ApplyGlobalFilters(modelBuilder);

			modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
		}
		//TODO:Handle Record Deletion

		private static void ApplyGlobalFilters(ModelBuilder modelBuilder)
		{
			var entityModels = modelBuilder.Model.GetEntityTypes();

			foreach (var entityType in entityModels.Where(i => !entityModels.Any(b => b.ClrType != i.ClrType)))
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
