using System.Reflection;
using static Edu_Infinite.Course.Infrastructure.RegisterInfrastructure;
using static Edu_Infinite.Order.Infrastructure.RegisterInfrastructure;
using SharpGrip.FluentValidation.AutoValidation.Mvc.Extensions;
using FluentValidation;
using Asp.Versioning;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(cfg =>
{
	cfg.EnableAnnotations();
});

builder.Services.RegisterCourseApp();
builder.Services.RegisterOrderApp();
builder.Services.AddAutoMapper(Assembly.GetAssembly(typeof(Edu_Infinite.Api.Shared.Mappers.CourseMapperProfile)));
builder.Services.AddValidatorsFromAssemblyContaining(typeof(Dummy));
builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddApiVersioning(o =>
{
	o.AssumeDefaultVersionWhenUnspecified = true;
	o.DefaultApiVersion = new ApiVersion(1, 0);
	o.ReportApiVersions = true;
	o.ApiVersionReader = ApiVersionReader.Combine(
	new QueryStringApiVersionReader("api-version"),
	new HeaderApiVersionReader("X-Version"),
	new MediaTypeApiVersionReader("ver"));

}).AddMvc().AddApiExplorer(options =>
{
	options.GroupNameFormat = "'v'V";
	options.SubstituteApiVersionInUrl = true;
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
}
app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors(conf => conf.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.MapControllers();

app.Run();

file class Dummy { }
