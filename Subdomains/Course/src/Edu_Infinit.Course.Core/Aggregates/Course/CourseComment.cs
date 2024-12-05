using Edu_Infinite.SharedKernel;

namespace Edu_Infinite.Course.Core.Aggregates.Course
{
   public class CourseComment : BaseEntity<Guid>
   {
      public CourseComment()
      {
      }
      public Guid DefinitionId { get; private set; }
      public string UserName { get; private set; }
      public string Title { get; private set; }
      public string Comment { get; private set; }
      public Guid? ParentId { get; private set; }
      public ICollection<CourseComment> SubComments { get; private set; }
   }
}
