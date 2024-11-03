namespace Edu_Infinite.Api.Shared.Dtos.Course
{
	public class CourseCategoryCreateReqDto
	{
		public string Name { get;set; }
		public string? ParentId { get;set; }
	}
	public class CourseCategoryUpdateReqDto : CourseCreateReqDto
   {
      public string Id { get; set; }
   }
}