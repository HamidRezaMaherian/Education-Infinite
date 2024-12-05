using AutoMapper;
using Edu_Infinit.Course.Core.Aggregates.Category;
using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Api.Shared.Dtos.Course.Category;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.SharedKernel.ValueObjects;

namespace Edu_Infinite.Api.Shared.Mappers
{
   public class CourseMapperProfile : Profile
   {
      public CourseMapperProfile()
      {
         CreateMap<CourseDefinitionDto, CourseDefinition>().ReverseMap()
         .ForMember(i => i.CategoryName, cfg => cfg.MapFrom(i => i.Category.Name))
         .ForMember(i => i.IntroVideo, (cfg) => cfg.MapFrom(i => i.IntroVideo.ToString()))
         .ForMember(i => i.MainImage, (cfg) => cfg.MapFrom(i => i.MainImage.ToString()));

         CreateMap<CourseDetailsDto, CourseDefinition>().ReverseMap().ForMember(i => i.Definition, cfg => cfg.MapFrom(b => b));
         CreateMap<CourseSection, CourseSectionDto>().ReverseMap();
         CreateMap<CourseContent, CourseContentDto>().ReverseMap();


         CreateMap<CourseCreateReqDto, CourseDefinition>()
         .ForMember(i => i.IntroVideo, (cfg) => cfg.MapFrom(i => new Blob(i.IntroVideo)))
         .ForMember(i => i.MainImage, (cfg) => cfg.MapFrom(i => new Blob(i.MainImage)))
         .ReverseMap()
         .ForMember(i => i.IntroVideo, (cfg) => cfg.MapFrom(i => i.IntroVideo.ToString()))
         .ForMember(i => i.MainImage, (cfg) => cfg.MapFrom(i => i.MainImage.ToString()));

         CreateMap<CourseCategoryCreateReqDto, CourseCategory>().ReverseMap();
         CreateMap<CourseCategoryDto, CourseCategory>().ReverseMap();

         CreateMap<CourseComment, AddCourseCommentDto>()
            .ForMember(i => i.DefinitionId, action => action.MapFrom(i => i.DefinitionId.ToString()))
            .ForMember(i => i.ParentId, action => action.MapFrom(i => i.ParentId.ToString()));

         CreateMap<CourseRate, AddCourseRateDto>()
            .ForMember(i => i.CourseId, action => action.MapFrom(i => i.DefinitionId.ToString()));
      }
   }
}
