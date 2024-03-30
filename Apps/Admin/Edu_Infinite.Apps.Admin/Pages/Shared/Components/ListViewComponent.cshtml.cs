using Edu_Infinite.Apps.Admin.Common.Models;
using Microsoft.AspNetCore.Mvc;

namespace Edu_Infinite.Apps.Admin.Pages.Shared.ViewComponents
{
   public class ListViewComponent : ViewComponent
   {
      public IViewComponentResult Invoke(ListViewModel model)
      {
         return View<ListViewModel>("ListViewComponent", model);
      }
   }
}
