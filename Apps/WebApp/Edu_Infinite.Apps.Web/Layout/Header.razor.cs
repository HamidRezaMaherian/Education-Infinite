using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Api.Shared.Dtos.Course.Category;
using Edu_Infinite.Apps.Web.Services;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Authorization;

namespace Edu_Infinite.Apps.Web.Layout
{
	public partial class Header
	{

		[Inject]
		protected CourseClientService CourseClientService { get; set; }
		public IEnumerable<CourseCategoryDto> CourseCategories { get; set; } = [];
		protected override async Task OnInitializedAsync()
		{
			try
			{
				CourseCategories = await CourseClientService.SearchCourseCategoriesByFilter(new CourseCategoryFilterReqDto() { PageNumber = 1, PageSize = 10 });
			}
			catch
			{
				CourseCategories = [];
			}
			base.OnInitialized();
		}
	}
}
