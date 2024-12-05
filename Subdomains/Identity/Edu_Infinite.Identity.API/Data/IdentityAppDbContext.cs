using Edu_Infinite.Identity.API.Data;
using Edu_Infinite.Identity.API.Models;
using Edu_Infinite.Identity.Shared;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace IdentityServerAspNetIdentity.Data;

public class IdentityAppDbContext : IdentityDbContext<ApplicationUser>
{
	public IdentityAppDbContext(DbContextOptions<IdentityAppDbContext> options)
		 : base(options)
	{
	}

	public DbSet<Instructor> Instructors { get; set; }

	protected override void OnModelCreating(ModelBuilder builder)
	{
		base.OnModelCreating(builder);
		builder.Entity<ApplicationUser>().Property(i => i.Avatar)
					 .HasConversion<BlobValueConverter>();

	}

}