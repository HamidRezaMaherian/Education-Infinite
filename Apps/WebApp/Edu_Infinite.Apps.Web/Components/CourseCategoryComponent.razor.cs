using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Api.Shared.Dtos.Course.Category;
using Edu_Infinite.Apps.Web.Services;
using Microsoft.AspNetCore.Components;

namespace Edu_Infinite.Apps.Web.Components
{
   public partial class CourseCategoryComponent
   {
      [Inject]
      private CourseClientService ClientService { get; set; }
      public IEnumerable<CourseCategoryDto> CourseCategories { get; set; } = [];
      protected override async Task OnInitializedAsync()
      {
         try
         {
            CourseCategories = await ClientService.SearchCourseCategoriesByFilter(new CourseCategoryFilterReqDto() { PageNumber = 1, PageSize = 10 });
         }
         catch
         {
            CourseCategories = [];
         }
      }
   }
}
