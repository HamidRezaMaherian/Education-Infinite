using IdentityServerAspNetIdentity;
using Serilog;
using System.Reflection;

Log.Logger = new LoggerConfiguration()
	 .WriteTo.Console()
	 .CreateBootstrapLogger();

Log.Information("Starting up");

try
{
	var builder = WebApplication.CreateBuilder(args);
	builder.Services.AddEndpointsApiExplorer();
	builder.Services.AddSwaggerGen(cfg =>
	{
		cfg.EnableAnnotations();
	});
	builder.Host.UseSerilog((ctx, lc) => lc
		 .WriteTo.Console(outputTemplate: "[{Timestamp:HH:mm:ss} {Level}] {SourceContext}{NewLine}{Message:lj}{NewLine}{Exception}{NewLine}")
		 .Enrich.FromLogContext()
		 .ReadFrom.Configuration(ctx.Configuration));

	builder.Services.AddControllers();
	builder.Services.AddAutoMapper(Assembly.GetAssembly(typeof(Edu_Infinite.Identity.API.Mapper.DefaultMapper)));

	var app = builder
		  .ConfigureServices()
		  .ConfigurePipeline();
	// Configure the HTTP request pipeline.
	if (app.Environment.IsDevelopment())
	{
		app.UseSwagger();
		app.UseSwaggerUI();
	}

	// this seeding is only for the template to bootstrap the DB and users.
	// in production you will likely want a different approach.
	if (args.Contains("/seed"))
	{
		Log.Information("Seeding database...");
		SeedData.EnsureSeedData(app);
		Log.Information("Done seeding database. Exiting.");
		return;
	}

	app.Run();
}
catch (Exception ex) when (ex is not HostAbortedException)
{
	Log.Fatal(ex, "Unhandled exception");
}
finally
{
	Log.Information("Shut down complete");
	Log.CloseAndFlush();
}