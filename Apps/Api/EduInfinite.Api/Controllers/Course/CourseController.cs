using Asp.Versioning;
using AutoMapper;
using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.Course.Core.Specs;
using Edu_Infinite.SharedKernel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Edu_Infinite.Api.Controllers.Course
{
   [Route("api/course/[action]")]
   [ApiController]
   [ApiVersion("1.0")]
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
      public async Task<ActionResult<CourseDefinitionDto>> Filter([FromQuery] CourseFilterReqDto reqDto)
      {
         var queryRes = await _repo.ListAsync(new CourseListFilterSpec(reqDto.PageNumber, reqDto.PageSize));
         var apiRes = _mapper.Map<List<CourseDefinitionDto>>(queryRes);
         return Ok(apiRes);
      }
      [HttpGet("{id}")]
      [SwaggerOperation(Summary = "get full course info by id")]
      [ProducesResponseType(200)]
      [ProducesResponseType(400)]
      public async Task<ActionResult<CourseDetailsDto>> GetById(string id)
      {
         var queryRes = await _repo.SingleOrDefaultAsync(new GetFullCourseInfoSpec(id));
         var apiRes = _mapper.Map<CourseDetailsDto>(queryRes);
         return Ok(apiRes);
      }
      [HttpPost]
      [SwaggerOperation(Summary = "add comment for course")]
      [ProducesResponseType(200)]
      [ProducesResponseType(400)]
      public async Task<IActionResult> AddComment([FromBody] AddCourseCommentDto reqDto)
      {
         var courseDefinition = await _repo.GetByIdAsync(reqDto.DefinitionId);
         if (courseDefinition is null)
            return BadRequest("course not found");
         courseDefinition.AddComment(_mapper.Map<CourseComment>(reqDto));
         await eventPublisher.Publish(courseDefinition);
         return Ok();
      }
      [HttpPost]
      [SwaggerOperation(Summary = "add comment for course")]
      [ProducesResponseType(200)]
      [ProducesResponseType(400)]
      public async Task<IActionResult> CommitRate([FromBody] AddCourseRateDto reqDto)
      {
         var courseDefinition = await _repo.GetByIdAsync(reqDto.CourseId);
         if (courseDefinition is null)
            return BadRequest("course not found");
         //HttpContext.User.Identity.userName
         courseDefinition.AddRate(_mapper.Map<CourseRate>(reqDto));
         await eventPublisher.Publish(courseDefinition);
         return Ok();
      }
   }

   [Route("api/course/[action]")]
   [ApiController]
   [ApiVersion("2.0")]
   //[Authorize]
   public class AdminCourseController : ControllerBase
   {
      private readonly IQueryRepository<CourseDefinition> _repo;
      private readonly IMapper _mapper;
      private readonly IEntityEventPublisher eventPublisher;

      public AdminCourseController(IQueryRepository<CourseDefinition> repo, IMapper mapper, IEntityEventPublisher eventPublisher)
      {
         _repo = repo;
         _mapper = mapper;
         this.eventPublisher = eventPublisher;
      }
      [HttpGet]
      [SwaggerOperation(Summary = "filter courses with pagination")]
      [ProducesResponseType(200)]
      [ProducesResponseType(400)]
      public async Task<ActionResult<CourseDefinitionDto>> Filter([FromQuery] CourseFilterReqDto reqDto)
      {
         var queryRes = await _repo.ListAsync(new CourseListFilterSpec(reqDto.PageNumber, reqDto.PageSize, false));
         var apiRes = _mapper.Map<List<CourseDefinitionDto>>(queryRes);
         return Ok(apiRes);
      }
      [HttpGet("{id}")]
      [SwaggerOperation(Summary = "get full course info by id")]
      [ProducesResponseType(200)]
      [ProducesResponseType(400)]
      public async Task<ActionResult<CourseDetailsDto>> GetById(string id)
      {
         var queryRes = await _repo.SingleOrDefaultAsync(new GetFullCourseInfoSpec(id));
         var apiRes = _mapper.Map<CourseDetailsDto>(queryRes);
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
      //[HttpPost]
      //[SwaggerOperation(Summary = "add course section for course")]
      //[ProducesResponseType(200)]
      //[ProducesResponseType(400)]
      //public async Task<IActionResult> AddContent([FromBody] AddCourseContentDto reqDto)
      //{
      //	var courseDefinition = await _repo.GetByIdAsync(reqDto.CourseId);
      //	if (courseDefinition is null)
      //		return BadRequest("course not found");
      //	foreach (var sectionName in reqDto.SectionNames)
      //		courseDefinition.AddSection(new CourseSection(sectionName));
      //	await eventPublisher.Publish(courseDefinition);
      //	return Ok();
      //}
   }

}
