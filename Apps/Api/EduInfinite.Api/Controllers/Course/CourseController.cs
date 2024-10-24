using Ardalis.Specification;
using AutoMapper;
using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.Course.Core.Specs;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using Edu_Infinite.SharedKernel.Specifications;
using Microsoft.AspNetCore.Mvc;
using SharpGrip.FluentValidation.AutoValidation.Mvc.Attributes;
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
      public async Task<ActionResult<CourseResponseDto>> Filter([FromQuery] CourseFilterReqDto reqDto)
      {
         var queryRes = await _repo.ListAsync(new CourseListFilterSpec(reqDto.PageNumber, reqDto.PageSize));
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
      [HttpPost]
      [SwaggerOperation(Summary = "add course section for course")]
      [ProducesResponseType(200)]
      [ProducesResponseType(400)]
      public async Task<IActionResult> AddSection([FromBody] AddCourseSectionDto reqDto)
      {
         var courseDefinition = await _repo.GetByIdAsync(reqDto.CourseId);
         if (courseDefinition is null)
            return BadRequest("course not found");
         foreach (var sectionName in reqDto.SectionNames)
            courseDefinition.AddSection(new CourseSection(sectionName));
         await eventPublisher.Publish(courseDefinition);
         return Ok();
      }
      [HttpPost]
      [SwaggerOperation(Summary = "add course section for course")]
      [ProducesResponseType(200)]
      [ProducesResponseType(400)]
      public async Task<IActionResult> AddContent([FromBody] AddCourseContentDto reqDto)
      {
         var courseDefinition = await _repo.GetByIdAsync(reqDto.CourseId);
         if (courseDefinition is null)
            return BadRequest("course not found");
         foreach (var sectionName in reqDto.SectionNames)
            courseDefinition.AddSection(new CourseSection(sectionName));
         await eventPublisher.Publish(courseDefinition);
         return Ok();
      }
   }
}
