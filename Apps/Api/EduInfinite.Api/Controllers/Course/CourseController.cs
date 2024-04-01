using AutoMapper;
using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.SharedKernel.Interfaces;
using Edu_Infinite.SharedKernel.Specifications;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Edu_Infinite.Api.Controllers.Course
{
   [Route("api/[controller]/[action]")]
   [ApiController]
   public class CourseController : ControllerBase
   {
      private readonly IRepository<CourseDefinition> _repo;
      private readonly IMapper _mapper;
      public CourseController(IRepository<CourseDefinition> repo, IMapper mapper)
      {
         _repo = repo;
         _mapper = mapper;
      }
      [HttpGet]
      [SwaggerOperation(Summary = "filter courses with pagination")]
      [ProducesResponseType(200)]
      [ProducesResponseType(400)]
      public async Task<IActionResult> Filter([FromQuery] CourseFilterReqDto reqDto)
      {
         var queryRes = await _repo.ListAsync(new BasePaginationSpec<CourseDefinition>(reqDto.PageNumber, reqDto.PageSize));
         var apiRes = _mapper.Map<List<CourseResponseDto>>(queryRes);
         return Ok(apiRes);
      }
   }
}
