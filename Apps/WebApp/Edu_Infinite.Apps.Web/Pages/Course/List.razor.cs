using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Apps.Web.Services;
using Microsoft.AspNetCore.Components;

namespace Edu_Infinite.Apps.Web.Pages.Course
{
   public partial class List
   {
      [Parameter]
      public string CategoryId { get; set; }
      [Inject]
      private CourseClientService ClientService { get; set; }
      public IEnumerable<CourseDefinitionDto> Courses { get; set; } = [];
      protected override async Task OnInitializedAsync()
      {
         try
         {
            Courses = await ClientService.SearchCoursesByFilter(new CourseFilterReqDto() { PageNumber = 1, PageSize = 10, CategoryId = CategoryId });
         }
         catch
         {
            Courses = [];
         }
         await base.OnInitializedAsync();
      }
   }
}
