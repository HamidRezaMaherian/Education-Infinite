using Edu_Infinite.Identity.Shared.Dtos;
using RestSharp;

namespace Edu_Infinite.Apps.Web.Services
{
   public class IdentityClientService
   {
      private readonly RestClient _client;

      public IdentityClientService(IConfiguration configuration)
      {
         var options = new RestClientOptions("https://localhost:7196");

         _client = new RestClient(options);

      }

      public Task<ICollection<InstructorDto>> SearchInstructorsByFilter()
      {
         var request = new RestRequest("/api/Instructor/Filter");
         //foreach (var prop in typeof(IdentityFilterReqDto).GetProperties())
         //   request.AddQueryParameter(prop.Name, prop.GetValue(filterReqDto)!.ToString());
         return _client.GetAsync<ICollection<InstructorDto>>(request);
      }
	}
}
