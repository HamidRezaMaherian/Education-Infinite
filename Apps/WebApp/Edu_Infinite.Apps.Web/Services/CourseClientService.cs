using Edu_Infinite.Api.Shared.Dtos.Course;
using RestSharp;

namespace Edu_Infinite.Apps.Web.Services
{
   public class CourseClientService
   {
      private readonly RestClient _client;

      public CourseClientService(IConfiguration configuration)
      {
         var options = new RestClientOptions(configuration["API"]!);

         _client = new RestClient(options);

      }

      public Task<ICollection<CourseResponseDto>> SearchCoursesByFilter(CourseFilterReqDto filterReqDto)
      {
         var request = new RestRequest("/api/Course/Filter");
         foreach (var prop in typeof(CourseFilterReqDto).GetProperties())
            request.AddQueryParameter(prop.Name, prop.GetValue(filterReqDto)!.ToString());
         return _client.GetAsync<ICollection<CourseResponseDto>>(request);
         //return httpRes.Content.rea;
      }
   }
}
