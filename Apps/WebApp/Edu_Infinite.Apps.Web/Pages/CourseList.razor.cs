using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Apps.Web.Services;
using Microsoft.AspNetCore.Components;

namespace Edu_Infinite.Apps.Web.Pages
{
   public partial class CourseList
   {
      [Inject]
      private CourseClientService ClientService { get; set; }
      public ICollection<CourseResponseDto> Courses { get; set; }
      protected override async Task OnInitializedAsync()
      {
         Courses=await ClientService.SearchCoursesByFilter(new CourseFilterReqDto() { pageNumber = 1 ,pageSize=2});
         await base.OnInitializedAsync();
      }
   }
}
