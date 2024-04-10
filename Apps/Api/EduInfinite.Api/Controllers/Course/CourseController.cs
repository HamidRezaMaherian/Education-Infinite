using Ardalis.Specification;
using AutoMapper;
using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.SharedKernel;
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
      private readonly IQueryRepository<CourseDefinition> _repo;
      private readonly IMapper _mapper;
      private readonly IEntityEventPublisher eventPublisher;

      public CourseController(IQueryRepository<CourseDefinition> repo, IMapper mapper, IEntityEventPublisher eventPublisher)
      {
         _repo = repo;
         _mapper = mapper;
         this.eventPublisher = eventPublisher;
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
      [HttpPost]
      [SwaggerOperation(Summary = "add course definition")]
      [ProducesResponseType(200)]
      [ProducesResponseType(400)]
      public async Task<IActionResult> AddCourse([FromBody] CourseCreateReqDto reqDto)
      {
         var courseDefinition = _mapper.Map<CourseDefinition>(reqDto);
         courseDefinition.SaveCourse();
         await eventPublisher.Publish(courseDefinition);
         return Ok();
      }
   }
}
