using Edu_Infinite.Order.Core.Aggregates.Order;
using Edu_Infinite.Order.Infrastructure.Database;
using Edu_Infinite.Order.Infrastructure.Database.Repositories;
using Edu_Infinite.SharedKernel.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Edu_Infinite.Order.Infrastructure
{
   public static class RegisterInfrastructure
   {
      public static void RegisterOrderApp(this IServiceCollection services)
      {
         var configuration = services.BuildServiceProvider().GetService<IConfiguration>();
         services.AddDbContext<OrderAppDbContext>(options =>
         {
            options.UseSqlServer(configuration!.GetConnectionString("DefaultConnection"), x => x.MigrationsHistoryTable("__OrderDbMigrationsHistory"));
         });
         services.AddMediatR(cfg =>
         {
            cfg.RegisterServicesFromAssembly(typeof(RegisterInfrastructure).Assembly);
            cfg.RegisterServicesFromAssembly(typeof(OrderDefinition).Assembly);
         });
         services.AddScoped(typeof(IRepository<>), typeof(EfRepository<>));
         //services.BuildServiceProvider()!.MigrateDatabase();
      }
      private static void MigrateDatabase(this IServiceProvider services)
      {
         var dbContext = services.CreateScope().ServiceProvider.GetService<OrderAppDbContext>();
         if ((dbContext!.Database.GetPendingMigrations()).Any())
         {
            dbContext!.Database.Migrate();
         }
      }
   }
}
