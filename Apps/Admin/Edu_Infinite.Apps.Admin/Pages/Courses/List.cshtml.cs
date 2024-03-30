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
      public ListViewModel ListViewModel { get; private set; }
      private readonly CourseClientService _courseClientService;
      public ListModel(CourseClientService courseClientService)
      {
         _courseClientService = courseClientService;
      }
      [BindProperty]
      public ICollection<CourseResponseDto> Courses { get; set; }

      public async Task OnGet()
      {
         Courses = await _courseClientService.SearchCoursesByFilter();
         ListViewModel = new ListViewModel(Courses.Select(i=>i as object).ToList());
         ListViewModel.AddColumn("Name", "نام");
         ListViewModel.AddColumn("Description", "توضیحات");
         ListViewModel.AddColumn("ShortDescription", "توضیحات کوتاه");
         ListViewModel.AddColumn("Level", "سطح دوره");
         ListViewModel.AddColumn("CategoryId", "دسته‌بندی");
      }
   }
}
