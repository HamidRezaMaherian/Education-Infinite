using Duende.IdentityServer.AspNetIdentity;
using Duende.IdentityServer.Models;
using Edu_Infinite.Identity.Shared;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace IdentityServerAspNetIdentity
{
   public class CustomProfileService : ProfileService<ApplicationUser>
   {
      public CustomProfileService(UserManager<ApplicationUser> userManager, IUserClaimsPrincipalFactory<ApplicationUser> claimsFactory) : base(userManager, claimsFactory)
      {
      }

      protected override async Task GetProfileDataAsync(ProfileDataRequestContext context, ApplicationUser user)
      {
         var principal = await GetUserClaimsAsync(user);
         var id = (ClaimsIdentity)principal.Identity!;
         context.AddRequestedClaims(principal.Claims);
      }
   }
}