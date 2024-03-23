using AutoMapper;
using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Course.Core.Aggregates.Course;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Edu_Infinite.Api.Shared.Mappers
{
   public class APIMapperProfile : Profile
   {
      public APIMapperProfile()
      {
         CreateMap<CourseResponseDto, CourseDefinition>().ReverseMap()
         .ForMember(i => i.IntroVideo, (cfg) => cfg.MapFrom(i => i.IntroVideo.ToString()))
         .ForMember(i => i.MainImage, (cfg) => cfg.MapFrom(i => i.MainImage.ToString()));
      }
   }
}
