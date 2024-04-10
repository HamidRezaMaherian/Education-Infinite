
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

using Ardalis.Specification;
using AutoMapper;
using Edu_Infinite.Api.Shared.Dtos.Order;
using Edu_Infinite.Order.Core.Aggregates.Order;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using Edu_Infinite.SharedKernel.Specifications;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace Edu_Infinite.Api.Controllers.Order
{
   [Route("api/[controller]/[action]")]
   [ApiController]
   public class OrderController : ControllerBase
   {
      private readonly IQueryRepository<OrderDefinition> _repo;
      private readonly IMapper _mapper;
      public OrderController(IQueryRepository<OrderDefinition> repo, IMapper mapper)
      {
         _repo = repo;
         _mapper = mapper;
      }
      [HttpGet]
      [SwaggerOperation(Summary = "filter courses with pagination")]
      [ProducesResponseType(200)]
      [ProducesResponseType(400)]
      public async Task<IActionResult> Filter([FromQuery] OrderFilterReqDto reqDto)
      {
         var queryRes = await _repo.ListAsync(new BasePaginationSpec<OrderDefinition>(reqDto.PageNumber, reqDto.PageSize));
         var apiRes = _mapper.Map<List<OrderResponseDto>>(queryRes);
         return Ok(apiRes);
      }
   }
}
