using Edu_Infinite.Apps.Web.Services;
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using System.Net.Http;
using System.Runtime.CompilerServices;

namespace Edu_Infinite.Apps.Web
{
   public static class Program
   {
      public static async Task Main(string[] args)
      {
         var builder = WebAssemblyHostBuilder.CreateDefault(args);
         builder.RootComponents.Add<App>("#app");
         builder.Services.ConfigureWebAppServices();
         await builder.Build().RunAsync();
      }
      public static void ConfigureWebAppServices(this IServiceCollection services)
      {
         services.AddHttpClient("backend", client => client.BaseAddress = new Uri("https://localhost:7068"))
                .AddHttpMessageHandler<AntiforgeryHandler>();
         services.AddTransient(sp => sp.GetRequiredService<IHttpClientFactory>().CreateClient("backend"));
         services.AddAuthorizationCore();
         services.AddTransient<AntiforgeryHandler>();
         services.AddScoped<AuthenticationStateProvider, BffAuthenticationStateProvider>();
         services.AddSingleton<CourseClientService>();
         services.AddSingleton<IdentityClientService>();
         services.AddBlazorBootstrap();
      }
   }
}
