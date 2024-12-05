namespace Edu_Infinite.Api.Shared.Dtos.Course.Category
{
	public class CourseCategoryDto
	{
		public string Name { get; set; }
		public Guid? ParentId { get; set; }
		public ICollection<CourseCategoryDto> SubCategories { get; set; }
	}
}
