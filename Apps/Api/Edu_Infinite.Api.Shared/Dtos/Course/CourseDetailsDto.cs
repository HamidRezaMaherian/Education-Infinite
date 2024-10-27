namespace Edu_Infinite.Api.Shared.Dtos.Course
{
	public class CourseDetailsDto
	{
		public CourseDefinitionDto Definition { get; set; }
		public IEnumerable<CourseSectionDto> Sections { get; set; }
		public static CourseDetailsDto EmptyObj()
		{
			return new CourseDetailsDto()
			{
				Definition = new CourseDefinitionDto(),
				Sections = Enumerable.Empty<CourseSectionDto>()
			};
		}
	}
}
