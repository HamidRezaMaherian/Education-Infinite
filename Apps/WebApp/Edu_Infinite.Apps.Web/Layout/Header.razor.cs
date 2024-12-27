using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Api.Shared.Dtos.Course.Category;
using Edu_Infinite.Apps.Web.Models;
using Edu_Infinite.Apps.Web.Services;
using Microsoft.AspNetCore.Components;

namespace Edu_Infinite.Apps.Web.Layout
{
	public partial class Header
	{

		[Inject]
		protected CourseClientService CourseClientService { get; set; }
		[Inject]
		public ShoppingCartService ShoppingCartService { get; set; }
		private List<ShoppingCartItem> _shoppingCartItems { get; set; } = [];
		public IEnumerable<CourseCategoryDto> CourseCategories { get; set; } = [];


		protected override async Task OnInitializedAsync()
		{
			try
			{
				CourseCategories = await CourseClientService.SearchCourseCategoriesByFilter(new CourseCategoryFilterReqDto() { PageNumber = 1, PageSize = 10 });
				_shoppingCartItems = await ShoppingCartService.GetCartItemsAsync();
			}
			catch
			{
				CourseCategories = [];
			}
			base.OnInitialized();
		}
	}
}
