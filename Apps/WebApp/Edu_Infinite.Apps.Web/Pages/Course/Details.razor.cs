using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Apps.Web.Services;
using Microsoft.AspNetCore.Components;

namespace Edu_Infinite.Apps.Web.Pages.Course
{
	public partial class Details
	{
		protected CourseDetailsDto CourseDetails { get; set; } = CourseDetailsDto.EmptyObj();
		[Inject]
		private CourseClientService CourseClientService { get; set; }
		[Inject]
		private IdentityClientService IdentityClientService { get; set; }
		[Inject]
		public ShoppingCartService ShoppingCartService { get; set; }

		[Parameter]
		public string Id { get; set; }
		protected override async Task OnInitializedAsync()
		{
			try
			{
				CourseDetails = await CourseClientService.GetCourseFullInfo(Id);
				CourseDetails.Instructor = await IdentityClientService.GetByUserName(CourseDetails.Definition.InstructorUserName);
			}
			catch
			{
				CourseDetails = CourseDetailsDto.EmptyObj();
			}
			await base.OnInitializedAsync();
		}
		private async Task AddToCartAsync()
		{
			await ShoppingCartService.AddItemToCartAsync(new Models.ShoppingCartItem()
			{
				Id = CourseDetails.Definition.Id,
				CategoryName = CourseDetails.Definition.CategoryName,
				FullPrice = CourseDetails.Definition.FullPrice,
				MainImage = CourseDetails.Definition.MainImage,
				Name = CourseDetails.Definition.Name,
				Rate = CourseDetails.Definition.Rate
			});
		}
	}
}
