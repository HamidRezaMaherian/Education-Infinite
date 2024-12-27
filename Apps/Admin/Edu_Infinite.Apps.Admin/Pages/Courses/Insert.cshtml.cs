using AutoMapper;
using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Api.Shared.Dtos.Course.Category;
using Edu_Infinite.Apps.Admin.Common.Models;
using Edu_Infinite.Apps.Admin.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Edu_Infinite.Apps.Admin.Pages.Courses
{
	public class InsertModel : PageModel
	{
		private readonly CourseClientService _courseService;
		private readonly IMapper _mapper;

		public InsertModel(CourseClientService courseService, IMapper mapper)
		{
			_courseService = courseService;
			_mapper = mapper;
		}

		[BindProperty]
		public CourseInsertDto Course { get; set; }

		private ICollection<CourseCategoryDto> _categories;

		public SelectList Categories { get; set; }

		public async Task OnGetAsync()
		{
			// Populate categories dropdown
			_categories = await _courseService.SearchCourseCategoriesByFilter(new CourseCategoryFilterReqDto() { PageNumber = 1, PageSize = 30});
			Categories = new SelectList(_categories, nameof(CourseCategoryDto.Id), nameof(CourseCategoryDto.Name));
		}

		public async Task<IActionResult> OnPostAsync()
		{
			if (!ModelState.IsValid)
			{
            _categories = await _courseService.SearchCourseCategoriesByFilter(new CourseCategoryFilterReqDto() { PageNumber = 1, PageSize = 30 });
            Categories = new SelectList(_categories, "Id", "Name");
				return Page();
			}

			// Process files
			string mainImagePath = null;
			string introVideoPath = null;

			if (Course.MainImage != null)
			{
				mainImagePath = await SaveFileAsync(Course.MainImage, "images/courses");
			}

			if (Course.IntroVideo != null)
			{
				introVideoPath = await SaveFileAsync(Course.IntroVideo, "videos/courses");
			}

			// Map input model to entity
			var course = _mapper.Map<CourseCreateReqDto>(Course);
			course.MainImage = mainImagePath;
			course.IntroVideo = introVideoPath;
			var result = await _courseService.AddCourseAsync(course);
			if (result.StatusCode != System.Net.HttpStatusCode.OK)
				ModelState.AddModelError("", result.ErrorMessage!);
			return RedirectToPage("List");
		}

		private async Task<string> SaveFileAsync(IFormFile file, string folder)
		{
			var uploadsFolder = Path.Combine("wwwroot", folder);
			Directory.CreateDirectory(uploadsFolder);

			var fileName = Path.GetFileNameWithoutExtension(file.FileName) + "_" + Guid.NewGuid() + Path.GetExtension(file.FileName);
			var filePath = Path.Combine(uploadsFolder, fileName);

			using (var fileStream = new FileStream(filePath, FileMode.Create))
			{
				await file.CopyToAsync(fileStream);
			}

			return Path.Combine(folder, fileName).Replace("wwwroot/", "");
		}
	}
}
