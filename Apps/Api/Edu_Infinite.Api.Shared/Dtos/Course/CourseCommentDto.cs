using Edu_Infinite.Course.Core.Aggregates.Constants;
using Edu_Infinite.Course.Core.Aggregates.Course;

namespace Edu_Infinite.Api.Shared.Dtos.Course
{
	public class CourseCommentDto
	{
      public string UserName { get; set; }
      public string Title { get; set; }
      public string Comment { get; set; }
      public ICollection<CourseComment> SubComments { get; set; }
   }
}
