using Bogus;
using Edu_Infinit.Course.Core.Aggregates.Category;
using Edu_Infinite.Course.Core.Aggregates.Constants;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.SharedKernel.ValueObjects;

namespace API.Tests
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
         Assert.Pass();
      }
   }

   public static class DataSeeder
   {
      public static void Seed(CourseAppDbContext context)
      {
         var faker = new Faker();

         // Seed CourseCategories
         var courseCategories = new List<CourseCategory>();
         for (int i = 0; i < 10; i++)
         {
            var category = new CourseCategory(faker.Random.Guid(), faker.Commerce.Categories(1).First(), null);
            courseCategories.Add(category);
         }
         context.CourseCategories.AddRange(courseCategories);

         // Seed CourseDefinitions
         var courseDefinitions = new List<CourseDefinition>();
         foreach (var category in courseCategories)
         {
            for (int i = 0; i < 5; i++)
            {
               var course = new CourseDefinition(
                   faker.Random.Guid(),
                   faker.Company.CatchPhrase(),
                   faker.Lorem.Sentence(),
                   faker.Lorem.Paragraph(),
                   faker.Finance.Amount(100, 1000),
                   new Blob(faker.Image.PicsumUrl()),
                   new Blob(faker.Image.PicsumUrl()),
                   category.Id,
                   faker.Random.Guid(),
                   faker.PickRandom<SkillLevel>());

               courseDefinitions.Add(course);
            }
         }
         context.CourseDefinitions.AddRange(courseDefinitions);

         // Seed CourseSections
         var courseSections = new List<CourseSection>();
         foreach (var course in courseDefinitions)
         {
            for (int i = 0; i < 3; i++)
            {
               var section = new CourseSection(faker.Commerce.Department(), course.Id);
               courseSections.Add(section);
            }
         }
         context.CourseSections.AddRange(courseSections);

         // Seed CourseContents
         var courseContents = new List<CourseContent>();
         foreach (var section in courseSections)
         {
            for (int i = 0; i < 5; i++)
            {
               var content = new CourseDocumentContent(section.Id, faker.Company.CatchPhrase(), new Blob(faker.Image.PicsumUrl()));
               courseContents.Add(content);
            }
         }
         context.CourseContents.AddRange(courseContents);

         // Seed CourseRates
         var courseRates = new List<CourseRate>();
         foreach (var course in courseDefinitions)
         {
            for (int i = 0; i < 10; i++)
            {
               var rate = new CourseRate(faker.Random.Byte(1, 5), faker.Internet.UserName());
               courseRates.Add(rate);
            }
         }
         context.CourseRates.AddRange(courseRates);

         // Seed CourseComments
         var courseComments = new List<CourseComment>();
         foreach (var course in courseDefinitions)
         {
            for (int i = 0; i < 10; i++)
            {
               var comment = new CourseComment
               (
                  course.Id,
                  faker.Internet.UserName(),
                  faker.Lorem.Sentence(),
                  faker.Lorem.Paragraph(),
                  null
               );
               courseComments.Add(comment);
            }
         }
         context.CourseComments.AddRange(courseComments);

         context.SaveChanges();
      }
   }

}