using System.Reflection;
using static Edu_Infinite.Course.Infrastructure.RegisterInfrastructure;
using static Edu_Infinite.Order.Infrastructure.RegisterInfrastructure;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.RegisterCourseApp();
builder.Services.RegisterOrderApp();
builder.Services.AddAutoMapper(Assembly.GetAssembly(typeof(Edu_Infinite.Api.Shared.Mappers.CourseMapperProfile)));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
   app.UseSwagger();
   app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
