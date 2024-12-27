using Asp.Versioning;
using AutoMapper;
using Edu_Infinit.Course.Core.Aggregates.Category;
using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Api.Shared.Dtos.Course.Category;
using Edu_Infinite.Course.Core.Specs;
using Edu_Infinite.SharedKernel;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Edu_Infinite.Api.Controllers.Course
{
   [Route("api/coursecategory/[action]")]
   [ApiController]
   [ApiVersion("1.0")]
   public class CourseCategoryController : ControllerBase
   {
      private readonly IQueryRepository<CourseCategory> _repo;
      private readonly IMapper _mapper;
      private readonly IEntityEventPublisher eventPublisher;

      public CourseCategoryController(IQueryRepository<CourseCategory> repo, IMapper mapper, IEntityEventPublisher eventPublisher)
      {
         _repo = repo;
         _mapper = mapper;
         this.eventPublisher = eventPublisher;
      }
      [HttpGet]
      [SwaggerOperation(Summary = "filter course categories with pagination")]
      [ProducesResponseType(200)]
      [ProducesResponseType(400)]
      public async Task<ActionResult<CourseCategoryDto>> Filter([FromQuery] CourseCategoryFilterReqDto reqDto)
      {
         var queryRes = await _repo.ListAsync(new CourseCategoryListFilterSpec(reqDto.PageNumber, reqDto.PageSize));
         var apiRes = _mapper.Map<List<CourseCategoryDto>>(queryRes);
         return Ok(apiRes);
      }
      [HttpPost]
      [SwaggerOperation(Summary = "add course category")]
      [ProducesResponseType(200)]
      [ProducesResponseType(400)]
      public async Task<IActionResult> AddCourseCategory([FromBody] CourseCategoryCreateReqDto reqDto)
      {
         var courseDefinition = _mapper.Map<CourseCategory>(reqDto);
         courseDefinition.SaveCourse();
         await eventPublisher.Publish(courseDefinition);
         return Ok();
      }
   }
   [Route("api/coursecategory/[action]")]
   [ApiController]
   [ApiVersion("2.0")]
   public class AdminCourseCategoryController : ControllerBase
   {
      private readonly IQueryRepository<CourseCategory> _repo;
      private readonly IMapper _mapper;
      private readonly IEntityEventPublisher eventPublisher;
      
      public AdminCourseCategoryController(IQueryRepository<CourseCategory> repo, IMapper mapper, IEntityEventPublisher eventPublisher)
      {
         _repo = repo;
         _mapper = mapper;
         this.eventPublisher = eventPublisher;
      }
      [HttpGet]
      [SwaggerOperation(Summary = "filter course categories with pagination")]
      [ProducesResponseType(200)]
      [ProducesResponseType(400)]
      public async Task<ActionResult<CourseCategoryDto>> Filter([FromQuery] CourseCategoryFilterReqDto reqDto)
      {
         var queryRes = await _repo.ListAsync(new CourseCategoryListFilterSpec(reqDto.PageNumber, reqDto.PageSize,false));
         var apiRes = _mapper.Map<List<CourseCategoryDto>>(queryRes);
         return Ok(apiRes);
      }
      [HttpPost]
      [SwaggerOperation(Summary = "add course category")]
      [ProducesResponseType(200)]
      [ProducesResponseType(400)]
      public async Task<IActionResult> AddCourseCategory([FromBody] CourseCategoryCreateReqDto reqDto)
      {
         var courseDefinition = _mapper.Map<CourseCategory>(reqDto);
         courseDefinition.SaveCourse();
         await eventPublisher.Publish(courseDefinition);
         return Ok();
      }
   }
}
