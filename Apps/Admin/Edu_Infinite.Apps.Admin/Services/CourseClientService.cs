using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Api.Shared.Dtos.Course.Category;
using MediatR;
using RestSharp;

namespace Edu_Infinite.Apps.Admin.Services
{
	public class CourseClientService
	{
		private readonly RestClient _client;

		public CourseClientService(IConfiguration configuration)
		{
			var options = new RestClientOptions("https://localhost:44341");

			_client = new RestClient(options);
			_client.AddDefaultHeader("X-Version", "2.0");
		}

		public Task<ICollection<CourseDefinitionDto>> SearchCoursesByFilter(CourseFilterReqDto filterReqDto)
		{
			var request = new RestRequest("/api/Course/Filter");
			foreach (var prop in typeof(CourseFilterReqDto).GetProperties())
				if (prop.GetValue(filterReqDto)?.ToString() is not null)
					request.AddQueryParameter(prop.Name, prop.GetValue(filterReqDto)?.ToString());
			return _client.GetAsync<ICollection<CourseDefinitionDto>>(request);
		}
		public Task<ICollection<CourseCategoryDto>> SearchCourseCategoriesByFilter(CourseCategoryFilterReqDto filterReqDto)
		{
			var request = new RestRequest("/api/CourseCategory/Filter");
			foreach (var prop in typeof(CourseCategoryFilterReqDto).GetProperties())
				request.AddQueryParameter(prop.Name, prop.GetValue(filterReqDto)!.ToString());
			return _client.GetAsync<ICollection<CourseCategoryDto>>(request);
		}
		public Task<CourseDetailsDto> GetCourseFullInfo(string id)
		{
			var request = new RestRequest($"/api/course/getbyid/{id}");
			return _client.GetAsync<CourseDetailsDto>(request);
		}

		public Task<RestResponse> AddCourseAsync(CourseCreateReqDto course)
		{
			var request = new RestRequest($"/api/course/addcourse");
			request.AddBody(course, ContentType.Json);
			return _client.PostAsync(request);
		}
	}
}
