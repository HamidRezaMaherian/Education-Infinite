using Edu_Infinite.Identity.Shared.Dtos;

namespace Edu_Infinite.Api.Shared.Dtos.Course
{
	public class CourseDetailsDto
	{
		public CourseDefinitionDto Definition { get; set; }
		public IEnumerable<CourseSectionDto> Sections { get; set; }
		public IEnumerable<CourseCommentDto> Comments { get; set; }
		public InstructorDto Instructor { get; set; }
		public static CourseDetailsDto EmptyObj()
		{
			return new CourseDetailsDto()
			{
				Definition = CourseDefinitionDto.EmptyObj(),
				Sections = Enumerable.Empty<CourseSectionDto>(),
				Comments = Enumerable.Empty<CourseCommentDto>(),
				Instructor = InstructorDto.EmptyObj()
			};
		}
	}
}
