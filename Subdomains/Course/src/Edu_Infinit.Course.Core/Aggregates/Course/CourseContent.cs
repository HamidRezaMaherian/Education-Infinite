using Edu_Infinit.Course.Core.Constants;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.ValueObjects;

namespace Edu_Infinite.Course.Core.Aggregates.Course
{
	public abstract class CourseContent : BaseEntity<int>
	{
		public string Title { get; private set; }
		public ContentType Type { get; private set; }
		public Blob Content { get; private set; }
	}
}
