using Duende.IdentityServer;
using IdentityServerAspNetIdentity.Data;
using Edu_Infinite.Identity.Shared;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Serilog;
using Edu_Infinite.Identity.API.Models;

namespace IdentityServerAspNetIdentity;

internal static class HostingExtensions
{
   public static WebApplication ConfigureServices(this WebApplicationBuilder builder)
   {
      builder.Services.AddRazorPages();

      builder.Services.AddDbContext<IdentityAppDbContext>(options =>
          options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"), x => x.MigrationsHistoryTable("__IdentityDbMigrationsHistory")));

      builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
          .AddEntityFrameworkStores<IdentityAppDbContext>()
          .AddDefaultTokenProviders();

      builder.Services
          .AddIdentityServer(options =>
          {
             options.Events.RaiseErrorEvents = true;
             options.Events.RaiseInformationEvents = true;
             options.Events.RaiseFailureEvents = true;
             options.Events.RaiseSuccessEvents = true;

             // see https://docs.duendesoftware.com/identityserver/v6/fundamentals/resources/
             options.EmitStaticAudienceClaim = true;
          })
          .AddInMemoryIdentityResources(Config.IdentityResources)
          .AddInMemoryApiScopes(Config.ApiScopes)
          .AddInMemoryClients(Config.Clients)
          .AddAspNetIdentity<ApplicationUser>()
          .AddProfileService<CustomProfileService>();

      //builder.Services.AddAuthentication()
      //    .AddGoogle(options =>
      //    {
      //        options.SignInScheme = IdentityServerConstants.ExternalCookieAuthenticationScheme;

      //        // register your IdentityServer with Google at https://console.developers.google.com
      //        // enable the Google+ API
      //        // set the redirect URI to https://localhost:5001/signin-google
      //        options.ClientId = "copy client ID from Google here";
      //        options.ClientSecret = "copy client secret from Google here";
      //    });

      return builder.Build();
   }

   public static WebApplication ConfigurePipeline(this WebApplication app)
   {
		app.UseCors(conf => conf.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

		app.UseSerilogRequestLogging();

      if (app.Environment.IsDevelopment())
      {
         app.UseDeveloperExceptionPage();
      }
      app.UseStaticFiles();
      app.UseRouting();
      app.UseIdentityServer();
      app.UseAuthorization();
      app.MapRazorPages()
          .RequireAuthorization();
      app.MapControllers();

      return app;
   }
}