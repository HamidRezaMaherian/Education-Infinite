using Edu_Infinite.SharedKernel;

namespace Edu_Infinite.Course.Core.Aggregates.Course
{
   public class CourseComment : BaseEntity<Guid>
   {
      public CourseComment(Guid definitionId, string userName, string title, string comment, Guid? parentId)
      {
         DefinitionId = definitionId;
         UserName = userName;
         Title = title;
         Comment = comment;
         ParentId = parentId;
      }

      public Guid DefinitionId { get; private set; }
      public string UserName { get; private set; }
      public string Title { get; private set; }
      public string Comment { get; private set; }
      public Guid? ParentId { get; private set; }
      public ICollection<CourseComment> SubComments { get; private set; }
   }
}
