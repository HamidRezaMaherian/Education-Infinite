using Edu_Infinite.Api.Shared.Dtos.Course;
using Microsoft.AspNetCore.Components;

namespace Edu_Infinite.Apps.Web.Pages.Course
{
	public partial class Details
	{
		protected CourseDetails CourseDetails { get; set; }
		[Parameter]
		public int Id { get; set; }
		protected override async Task OnInitializedAsync()
		{
			Courses = await ClientService.SearchCoursesByFilter(new CourseFilterReqDto() { PageNumber = 1, PageSize = 10 });
			await base.OnInitializedAsync();
		}
	}
}
