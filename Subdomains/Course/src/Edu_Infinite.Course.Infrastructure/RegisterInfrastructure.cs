﻿using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.Course.Core.Interfaces;
using Edu_Infinite.Course.Infrastructure.Database;
using Edu_Infinite.Course.Infrastructure.Database.Repositories;
using Edu_Infinite.Course.Infrastructure.Services;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using Edu_Infinite.SharedKernel.Utils;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Edu_Infinite.Course.Infrastructure
{
	public static class RegisterInfrastructure
	{
		public static void RegisterCourseApp(this IServiceCollection services)
		{
			var configuration = services.BuildServiceProvider().GetService<IConfiguration>();
			services.AddDbContext<CourseAppDbContext>(options =>
			{
				options.UseSqlServer(configuration!.GetConnectionString("DefaultConnection"), x => x.MigrationsHistoryTable("__CourseDbMigrationsHistory"));
			});
			services.AddMediatR(cfg =>
			{
				cfg.RegisterServicesFromAssembly(typeof(RegisterInfrastructure).Assembly);
				cfg.RegisterServicesFromAssembly(typeof(CourseDefinition).Assembly);
			});
			services.AddSingleton(typeof(IEntityEventPublisher), typeof(CourseEntityEventPublisher));
			services.RegisterRepos();
			//services.BuildServiceProvider().MigrateDatabase();
		}
		private static void RegisterRepos(this IServiceCollection services)
		{
			var domainAssembly = Assembly.GetAssembly(typeof(CourseDefinition))!;
			foreach (var aggregateType in domainAssembly.GetTypes().GetImplementorsOf<IAggregateRoot>())
			{
				services.AddScoped(typeof(IRepository<>).MakeGenericType(aggregateType), typeof(EfRepository<>).MakeGenericType(aggregateType));
			services.AddScoped(typeof(IQueryRepository<>).MakeGenericType(aggregateType), typeof(EfRepository<>).MakeGenericType(aggregateType));
			}
			services.AddScoped<ICourseRepository, CourseRepository>();
		}
		private static void MigrateDatabase(this IServiceProvider services)
		{
			var dbContext = services.CreateScope().ServiceProvider.GetService<CourseAppDbContext>();
			if ((dbContext!.Database.GetPendingMigrations()).Any())
			{
				dbContext!.Database.Migrate();
			}
		}

	}
}
