namespace Edu_Infinite.Api.Shared.Dtos.Course
{
	public class CourseDetailsDto
	{
		public CourseDefinitionDto Definition { get; set; }
		public ICollection<CourseSectionDto> Sections { get; set; }
	}
}
