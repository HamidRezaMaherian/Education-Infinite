namespace Edu_Infinite.Api.Shared.Dtos.Course
{
	public class CourseSectionDto
	{
		public string Name { get; set; }
		public ICollection<CourseContentDto> Contents { get; set; }
	}
}
