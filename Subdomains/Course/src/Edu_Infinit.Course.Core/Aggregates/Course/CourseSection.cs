using Edu_Infinite.SharedKernel;

namespace Edu_Infinite.Course.Core.Aggregates.Course
{
	public class CourseSection : BaseEntity<int>
	{
		public string Name { get; private set; }
		public ICollection<CourseContent> Contents { get; private set; }
	}
}