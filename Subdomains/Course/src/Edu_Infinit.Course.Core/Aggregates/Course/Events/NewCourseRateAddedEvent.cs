using Edu_Infinite.SharedKernel;

namespace Edu_Infinite.Course.Core.Aggregates.Course.Events
{
   public class NewCourseRateAddedEvent : BaseDomainEvent, ITransactionRequest<CourseRate>
   {
      public CourseRate Rate { get; private set; }
      public Guid CourseId { get; private set; }

      internal NewCourseRateAddedEvent(CourseRate rate, Guid courseId)
      {
         Rate = rate;
         CourseId = courseId;
      }
   }
}
