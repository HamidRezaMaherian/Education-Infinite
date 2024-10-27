using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Apps.Web.Services;
using Microsoft.AspNetCore.Components;

namespace Edu_Infinite.Apps.Web.Pages.Course
{
	public partial class Details
	{
		protected CourseDetailsDto CourseDetails { get; set; } = CourseDetailsDto.EmptyObj();
		[Inject]
		private CourseClientService ClientService { get; set; }

		[Parameter]
		public string Id { get; set; }
		protected override async Task OnInitializedAsync()
		{
			CourseDetails = await ClientService.GetCourseFullInfo(Id);
			await base.OnInitializedAsync();
		}
	}
}
