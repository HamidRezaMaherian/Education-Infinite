namespace Edu_Infinite.Api.Shared.Dtos.Course
{
   public class AddCourseSectionDto
   {
      public string CourseId { get; set; }
      public ICollection<string> SectionNames { get; set; }
   }
}