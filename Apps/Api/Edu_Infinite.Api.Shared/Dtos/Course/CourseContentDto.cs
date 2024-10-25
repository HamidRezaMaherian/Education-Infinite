using Edu_Infinit.Course.Core.Constants;
using Edu_Infinite.SharedKernel.ValueObjects;

namespace Edu_Infinite.Api.Shared.Dtos.Course
{
	public class CourseContentDto
	{
		public string Title { get; private set; }
		public ContentType Type { get; private set; }
		public Blob Content { get; private set; }
	}
}
