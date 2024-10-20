namespace Edu_Infinite.Api.Controllers.Course
{
   public class AddCourseContentDto
   {
      public string CourseId { get; set; }
      public ICollection<string> SectionNames { get; set; }
   }
}