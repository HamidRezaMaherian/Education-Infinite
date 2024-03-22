using Edu_Infinite.Course.Infrastructure.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
		}
	}
}
