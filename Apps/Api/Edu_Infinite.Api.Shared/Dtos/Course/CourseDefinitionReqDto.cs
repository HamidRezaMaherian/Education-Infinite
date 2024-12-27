using Edu_Infinite.Course.Core.Aggregates.Constants;

namespace Edu_Infinite.Api.Shared.Dtos.Course
{
   public class CourseCreateReqDto
   {
      public string Name { get; set; }
      public string ShortDescription { get; set; }
      public string Description { get; set; }
      public decimal FullPrice { get; set; }

      public string MainImage { get; set; }

      public string IntroVideo { get; set; }

      public string CategoryId { get; set; }

      public SkillLevel Level { get; set; }

		public string InstructorUserName { get; set; }

	}
	public class CourseUpdateReqDto : CourseCreateReqDto
   {
      public string Id { get; set; }
   }
}