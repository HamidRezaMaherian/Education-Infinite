using Edu_Infinite.Course.Core.Aggregates.Constants;
using Edu_Infinite.Course.Core.Aggregates.Course;

namespace Edu_Infinite.Api.Shared.Dtos.Course
{
	public class CourseResponseDto
	{
		public int Number { get; set; } = 7565;
		public string Name { get; set; } = "دوره تست";
      public string ShortDescription { get; set; }
		public string Description { get; set; }
		public decimal FullPrice { get; set; }
		public string MainImage { get; set; }
		public string IntroVideo { get; set; }
		public string CategoryName { get; set; }
		public float Rate { get; set; }
		public SkillLevel Level { get; set; }
	}
}
