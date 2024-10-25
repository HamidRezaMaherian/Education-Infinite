using Edu_Infinite.Api.Shared.Dtos.Course;
using Microsoft.Net.Http.Headers;
using RestSharp.Authenticators;
using RestSharp;

namespace Edu_Infinite.Apps.Admin.Services
{
   public class CourseClientService
   {
      private readonly RestClient _client;

      public CourseClientService(IConfiguration configuration)
      {
         var options = new RestClientOptions(configuration["Services:Course"]!);

         _client = new RestClient(options);

      }

      public Task<ICollection<CourseDefinitionDto>> SearchCoursesByFilter(CourseFilterReqDto filterReqDto)
      {
         var request = new RestRequest("/api/Course/Filter");
         foreach (var prop in typeof(CourseFilterReqDto).GetProperties())
            request.AddQueryParameter(prop.Name, prop.GetValue(filterReqDto)!.ToString());
         return _client.GetAsync<ICollection<CourseDefinitionDto>>(request);
         //return httpRes.Content.rea;
      }
   }
}
