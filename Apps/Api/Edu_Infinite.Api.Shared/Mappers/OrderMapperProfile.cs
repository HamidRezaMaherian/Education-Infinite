using AutoMapper;
using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Api.Shared.Dtos.Order;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.Order.Core.Aggregates.Order;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Edu_Infinite.Api.Shared.Mappers
{
   public class OrderMapperProfile : Profile
   {
      public OrderMapperProfile()
      {
         CreateMap<OrderResponseDto, OrderDefinition>().ReverseMap();
      }
   }
}
