using Edu_Infinite.Identity.Shared.Dtos;
using RestSharp;

namespace Edu_Infinite.Apps.Web.Services
{
	public class IdentityClientService
	{
		private readonly RestClient _client;

		public IdentityClientService(IConfiguration configuration)
		{
			var options = new RestClientOptions("https://localhost:44340");

			_client = new RestClient(options);

		}

		public Task<InstructorDto> GetByUserName(string userName=null)
		{
			var request = new RestRequest("/api/Instructor/GetByUserName/{userName}");
			//foreach (var prop in typeof(IdentityFilterReqDto).GetProperties())
			if (userName is not null)
				request.AddUrlSegment("userName", userName);
			return _client.GetAsync<InstructorDto>(request);
		}
	}
}
