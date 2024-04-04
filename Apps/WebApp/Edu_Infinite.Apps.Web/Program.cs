using Edu_Infinite.Apps.Web.Services;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using System.Runtime.CompilerServices;

namespace Edu_Infinite.Apps.Web
{
   public static class Program
   {
      public static async Task Main(string[] args)
      {
         var builder = WebAssemblyHostBuilder.CreateDefault(args);
         //builder.RootComponents.Add<App>("#app");
         builder.Services.ConfigureServices();
         await builder.Build().RunAsync();
      }
      public static void ConfigureServices(this IServiceCollection services)
      {
         services.AddSingleton<CourseClientService>();
         services.AddBlazorBootstrap();
      }
   }
}
