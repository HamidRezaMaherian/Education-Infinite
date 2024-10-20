using AutoMapper;
using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.SharedKernel.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Edu_Infinite.Api.Shared.Mappers
{
   public class CourseMapperProfile : Profile
   {
      public CourseMapperProfile()
      {
         CreateMap<CourseResponseDto, CourseDefinition>().ReverseMap()
         .ForMember(i => i.CategoryName, cfg => cfg.MapFrom(i => i.Category.Name))
         .ForMember(i => i.IntroVideo, (cfg) => cfg.MapFrom(i => i.IntroVideo.ToString()))
         .ForMember(i => i.MainImage, (cfg) => cfg.MapFrom(i => i.MainImage.ToString()));

         CreateMap<CourseCreateReqDto, CourseDefinition>()
         .ForMember(i => i.IntroVideo, (cfg) => cfg.MapFrom(i => new Blob(i.IntroVideo)))
         .ForMember(i => i.MainImage, (cfg) => cfg.MapFrom(i => new Blob(i.MainImage)))
         .ReverseMap()
         .ForMember(i => i.IntroVideo, (cfg) => cfg.MapFrom(i => i.IntroVideo.ToString()))
         .ForMember(i => i.MainImage, (cfg) => cfg.MapFrom(i => i.MainImage.ToString()));
      }
   }
}
