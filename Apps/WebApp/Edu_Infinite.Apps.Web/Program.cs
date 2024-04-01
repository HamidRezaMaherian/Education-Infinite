using Edu_Infinite.Apps.Web.Services;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

namespace Edu_Infinite.Apps.Web
{
   public class Program
   {
      public static async Task Main(string[] args)
      {
         var builder = WebAssemblyHostBuilder.CreateDefault(args);
         builder.RootComponents.Add<App>("#app");
         builder.RootComponents.Add<HeadOutlet>("head::after");
         builder.Services.AddSingleton<CourseClientService>();
         builder.Services.AddBlazorBootstrap();

         await builder.Build().RunAsync();
      }
   }
}
