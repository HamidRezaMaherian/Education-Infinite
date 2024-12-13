using Edu_Infinite.Api.Shared.Constants;
using Edu_Infinite.SharedKernel.ValueObjects;

namespace Edu_Infinite.Api.Shared.Dtos.Course
{
	public class CourseContentDto
	{
		public string Title { get; set; }
		public ContentType Type { get; set; }
		public string Content { get; set; }
		public float Size { get; set; }
	}
}
