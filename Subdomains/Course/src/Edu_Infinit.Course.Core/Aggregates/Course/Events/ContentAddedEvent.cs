using Edu_Infinite.SharedKernel;

namespace Edu_Infinite.Course.Core.Aggregates.Course.Events
{
   public class ContentAddedEvent : BaseDomainEvent, ITransactionRequest<CourseContent>
   {
      public int SectionId { get; set; }
      public CourseContent Content { get; set; }
      public ContentAddedEvent(int sectionId, CourseContent content)
      {
         SectionId = sectionId;
         Content = content;
      }
   }
}