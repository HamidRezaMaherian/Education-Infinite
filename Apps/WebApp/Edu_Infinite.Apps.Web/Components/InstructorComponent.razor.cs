using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Apps.Web.Services;
using Edu_Infinite.Identity.Shared.Dtos;
using Microsoft.AspNetCore.Components;

namespace Edu_Infinite.Apps.Web.Components
{
   public partial class InstructorComponent
   {
      [Inject]
      private IdentityClientService ClientService { get; set; }
      public IEnumerable<InstructorDto> Instructors { get; set; } = [];
      protected override async Task OnInitializedAsync()
      {
         try
         {
            //Instructors = await ClientService.GetByUserName();
         }
         catch
         {
            Instructors = [];
         }

      }

   }
}
