using Microsoft.AspNetCore.Identity;

namespace Edu_Infinite.Identity.Shared
{
   public class Instructor : ApplicationUser
   {
      public string FirstName { get; set; }
      public string LastName { get; set; }
      public string AboutMe { get; set; }
   }
}
