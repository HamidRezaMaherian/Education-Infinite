using Edu_Infinite.SharedKernel.ValueObjects;
using Microsoft.AspNetCore.Identity;

namespace Edu_Infinite.Identity.API.Models
{
   public class ApplicationUser : IdentityUser
   {
        public Blob Avatar { get; set; }
    }
}
