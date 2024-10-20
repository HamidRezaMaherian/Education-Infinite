using Edu_Infinite.SharedKernel;

namespace Edu_Infinite.Course.Core.Aggregates.Course.Events
{
   public class NewCourseSectionAddedEvent : BaseDomainEvent, ITransactionRequest<CourseSection>
   {
      public CourseSection Section { get; private set; }
      public Guid CourseId { get; private set; }

      internal NewCourseSectionAddedEvent(CourseSection section, Guid courseId)
      {
         Section = section;
         CourseId = courseId;
      }
   }
}
