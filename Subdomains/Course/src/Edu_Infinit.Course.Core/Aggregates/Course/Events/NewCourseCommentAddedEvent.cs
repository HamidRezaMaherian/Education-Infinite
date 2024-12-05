using Edu_Infinite.SharedKernel;

namespace Edu_Infinite.Course.Core.Aggregates.Course.Events
{
   public class NewCourseCommentAddedEvent : BaseDomainEvent, ITransactionRequest<CourseComment>
   {
      public CourseComment Comment { get; private set; }
      public Guid CourseId { get; private set; }

      internal NewCourseCommentAddedEvent(CourseComment comment, Guid courseId)
      {
         Comment = comment;
         CourseId = courseId;
      }
   }
}
