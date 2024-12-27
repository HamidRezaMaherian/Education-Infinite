using Blazored.LocalStorage;
using Edu_Infinite.Apps.Web.Services;
using Fluxor;
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

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
			services.AddHttpClient("identity", client => client.BaseAddress = new Uri("https://localhost:44333"))
					 .AddHttpMessageHandler<AntiforgeryHandler>();
			services.AddTransient(sp => sp.GetRequiredService<IHttpClientFactory>().CreateClient("backend"));
			services.AddAuthorizationCore();
			services.AddCascadingAuthenticationState();
			services.AddTransient<AntiforgeryHandler>();
			services.AddScoped<AuthenticationStateProvider, BffAuthenticationStateProvider>();
			services.AddSingleton<CourseClientService>();
			services.AddSingleton<IdentityClientService>();
			services.AddScoped<ShoppingCartService>();
			services.AddBlazoredLocalStorage();
			services.AddFluxor(f => f.ScanAssemblies(typeof(Dummy).Assembly));
		}
	}
	file class Dummy { }
}
