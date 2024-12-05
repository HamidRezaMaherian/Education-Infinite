namespace Edu_Infinite.Api.Shared.Dtos.Course
{
   public class AddCourseCommentDto
   {
      public string DefinitionId { get; set; }
      public string Title { get; set; }
      public string Comment { get; set; }
      public string ParentId { get; set; }
   }
}
