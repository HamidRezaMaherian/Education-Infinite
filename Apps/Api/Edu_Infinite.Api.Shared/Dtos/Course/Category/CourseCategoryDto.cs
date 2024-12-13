namespace Edu_Infinite.Api.Shared.Dtos.Course.Category
{
   public class CourseCategoryDto
   {
      public string Id { get; set; }
      public string Name { get; set; }
      public ICollection<CourseCategoryDto> SubCategories { get; set; }
   }
}
