using Edu_Infinite.SharedKernel;

namespace Edu_Infinite.Course.Core.Aggregates.Course
{
   public class CourseRate : BaseEntity<Guid>
   {
      public CourseRate(byte rate, string userName)
      {
         Rate = rate;
         UserName = userName;
      }

      public byte Rate { get; private set; }
      public Guid DefinitionId { get; private set; }
      public string UserName { get; private set; }
   }
}
