using Edu_Infinite.SharedKernel;

namespace Edu_Infinite.Course.Core.Aggregates.Course.Events
{
   public class CourseSavedEvent : BaseDomainEvent, ITransactionRequest<TransactionResult<CourseDefinition>>
   {
      public CourseDefinition Course { get; private set; }

      internal CourseSavedEvent(CourseDefinition course)
      {
         Course = course;
      }
   }
}
