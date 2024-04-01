using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Apps.Admin.Common.Models;
using Edu_Infinite.Apps.Admin.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Edu_Infinite.Apps.Admin.Pages.Courses
{
   public class ListModel : PageModel
   {
      [BindProperty]
      public ListViewModel<CourseResponseDto> ListViewModel { get; private set; }
      private readonly CourseClientService _courseClientService;
      public ListModel(CourseClientService courseClientService)
      {
         _courseClientService = courseClientService;
      }
      [BindProperty]
      public ICollection<CourseResponseDto> Courses { get; set; }

      public async Task OnGet()
      {
         Courses = await _courseClientService.SearchCoursesByFilter(new CourseFilterReqDto() { PageNumber = 1, PageSize = 10 });
         ListViewModel = new ListViewModel<CourseResponseDto>(Courses);
         ListViewModel.AddColumn("Name", "نام");
         ListViewModel.AddColumn("Description", "توضیحات");
         ListViewModel.AddColumn("ShortDescription", "توضیحات کوتاه");
         ListViewModel.AddColumn("Level", "سطح دوره");
         ListViewModel.AddColumn("CategoryId", "دسته‌بندی");
      }
   }
}
