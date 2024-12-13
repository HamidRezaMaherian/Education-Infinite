using Edu_Infinite.Course.Core.Aggregates.Constants;
using Edu_Infinite.Course.Core.Aggregates.Course;

namespace Edu_Infinite.Api.Shared.Dtos.Course
{
	public class CourseDefinitionDto
	{
		public string Id { get; set; }
		public string Name { get; set; }
		public string ShortDescription { get; set; }
		public string Description { get; set; }
		public decimal FullPrice { get; set; }
		public string MainImage { get; set; }
		public string IntroVideo { get; set; }
		public string InstructorUserName { get; set; }
		public string CategoryName { get; set; }
		public float Rate { get; set; }
		public SkillLevel Level { get; set; }

		public static CourseDefinitionDto EmptyObj()
		{
			return new CourseDefinitionDto
			{
				Id = "",
				Name = "",
				ShortDescription = "",
				Description = "",
				FullPrice = 0,
				MainImage = "",
				IntroVideo = "",
				InstructorUserName = "",
				CategoryName = "",
				Rate = 0,
				Level = 0,
			};
		}
	}
}
