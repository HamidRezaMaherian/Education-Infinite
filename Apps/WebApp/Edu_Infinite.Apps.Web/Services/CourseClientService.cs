using Edu_Infinite.Api.Shared.Dtos.Course;
using RestSharp;

namespace Edu_Infinite.Apps.Web.Services
{
   public class CourseClientService
   {
      private readonly RestClient _client;

      public CourseClientService(IConfiguration configuration)
      {
         var options = new RestClientOptions("https://localhost:7181");

         _client = new RestClient(options);

      }

		public Task<ICollection<CourseDefinitionDto>> SearchCoursesByFilter(CourseFilterReqDto filterReqDto)
		{
			var request = new RestRequest("/api/Course/Filter");
			foreach (var prop in typeof(CourseFilterReqDto).GetProperties())
				request.AddQueryParameter(prop.Name, prop.GetValue(filterReqDto)!.ToString());
			return _client.GetAsync<ICollection<CourseDefinitionDto>>(request);
		}
		public Task<CourseDetailsDto> GetCourseFullInfo(string id)
		{
			var request = new RestRequest($"/api/Course/GetById/{id}");
			return _client.GetAsync<CourseDetailsDto>(request);
		}
	}
}
