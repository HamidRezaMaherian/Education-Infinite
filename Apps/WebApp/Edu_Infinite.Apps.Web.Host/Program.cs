
using Microsoft.AspNetCore.Mvc;

namespace Edu_Infinite.Apps.Web.Host
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);

			// Add services to the container.
			builder.Services.AddRazorPages();
			builder.Services.AddRazorComponents().AddInteractiveWebAssemblyComponents();
			builder.Services.ConfigureWebAppServices();
			builder.Services.AddBff();

			builder.Services.AddAuthentication(options =>
			{
				options.DefaultScheme = "cookie";
				options.DefaultChallengeScheme = "oidc";
				options.DefaultSignOutScheme = "oidc";
			})
				 .AddCookie("cookie", options =>
				 {
					 options.Cookie.Name = "__Host-blazor";
					 options.Cookie.SameSite = SameSiteMode.Strict;
				 })
				 .AddOpenIdConnect("oidc", options =>
				 {
					 options.Authority = "https://localhost:44340/";

					 // confidential client using code flow + PKCE
					 options.ClientId = "client_web_host";
					 options.ClientSecret = "secret";
					 options.ResponseType = "code";
					 options.ResponseMode = "query";

					 options.MapInboundClaims = false;
					 options.GetClaimsFromUserInfoEndpoint = true;
					 options.SaveTokens = true;

					 // request scopes + refresh tokens
					 options.Scope.Clear();
					 options.Scope.Add("openid");
					 options.Scope.Add("profile");
					 options.Scope.Add("api.course.read");
					 options.Scope.Add("offline_access");
				 });

			var app = builder.Build();

			// Configure the HTTP request pipeline.
			if (!app.Environment.IsDevelopment())
			{
				//app.UseWebAssemblyDebugging();
				app.UseExceptionHandler("/Error");
				// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
				app.UseHsts();
			}
			app.UseHttpsRedirection();
			app.UseBlazorFrameworkFiles();
			app.UseStaticFiles();

			app.UseRouting();

			app.UseAuthentication();
			app.UseBff();
			app.UseAuthorization();

			app.MapBffManagementEndpoints();
			app.MapRazorPages();

			app.MapControllers()
				 .RequireAuthorization()
				 .AsBffApiEndpoint();
			app.MapGet("bff/signup", (action) =>
			{
				Results.Redirect($"https://localhost:44340/Account/Signup?returnUrl={action.Request.Path}");
				return Task.CompletedTask;
			});

			//app.MapFallbackToFile("index.html");
			app.MapFallbackToPage("/_Host");

			app.Run();
		}
	}
}
