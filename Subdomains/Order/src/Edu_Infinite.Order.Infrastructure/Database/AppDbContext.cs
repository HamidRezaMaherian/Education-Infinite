using Edu_Infinite.Order.Core.Aggregates.Basket;
using Edu_Infinite.Order.Core.Aggregates.Order;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.ValueObjects;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Reflection;

namespace Edu_Infinite.Order.Infrastructure.Database
{
   internal class OrderAppDbContext(DbContextOptions<OrderAppDbContext> options) : DbContext(options)
   {
      public DbSet<OrderDefinition> Orders { get; set; }
      public DbSet<BasketDefinition> Baskets { get; set; }
      public DbSet<BasketItem> BasketItems { get; set; }

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
