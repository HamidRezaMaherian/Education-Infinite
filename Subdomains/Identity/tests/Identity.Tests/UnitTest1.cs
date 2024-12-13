using Bogus;
using Edu_Infinite.Identity.API.Models;
using Edu_Infinite.SharedKernel.ValueObjects;
using IdentityServerAspNetIdentity.Data;
using Microsoft.EntityFrameworkCore;

namespace Identity.Tests
{
	public class Tests
	{
		[SetUp]
		public void Setup()
		{
		}

		[Test]
		public void Test1()
		{
			var identityOptions = new DbContextOptionsBuilder<IdentityAppDbContext>()
				 .UseSqlServer("Server=.;Database=edu_infinit_db;User Id=sa;Password=hamidalireza;TrustServerCertificate=True")
				 .Options;

			using (var identityContext = new IdentityAppDbContext(identityOptions))
			{
				identityContext.Database.EnsureCreated();
				DataSeeder.Seed(identityContext);
			}

			Assert.Pass();
		}
	}
	public static class DataSeeder
	{
		public static void Seed(IdentityAppDbContext identityContext)
		{
			var faker = new Faker("fa");

			// Seed Instructors
			var instructors = new List<Instructor>();
			for (int i = 0; i < 10; i++)
			{
				var instructor = new Instructor
				{
					UserName = faker.Internet.UserName(),
					FirstName = faker.Name.FirstName(),
					LastName = faker.Name.LastName(),
					AboutMe = faker.Lorem.Paragraph(),
					Avatar = new Blob(faker.Image.PicsumUrl())
				};
				instructors.Add(instructor);
			}
			identityContext.Instructors.AddRange(instructors);
			identityContext.SaveChanges();
		}
	}
}