using Edu_Infinite.Admin.App._keenthemes.libs;
using Edu_Infinite.Admin.App._keenthemes;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddSingleton<IKTTheme, KTTheme>();
builder.Services.AddSingleton<IBootstrapBase, BootstrapBase>();
builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
var app = builder.Build();

app.UseStaticFiles();

IConfiguration themeConfiguration = new ConfigurationBuilder()
                            .AddJsonFile("_keenthemes/config/themesettings.json")
                            .Build();

IConfiguration iconsConfiguration = new ConfigurationBuilder()
                            .AddJsonFile("_keenthemes/config/icons.json")
                            .Build();

KTThemeSettings.init(themeConfiguration);
KTIconsSettings.init(iconsConfiguration);

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
   app.UseExceptionHandler("/Error");
   // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
   app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

app.Run();
