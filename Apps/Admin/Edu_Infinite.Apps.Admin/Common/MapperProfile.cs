using AutoMapper;
using Edu_Infinite.Api.Shared.Dtos.Course;
using Edu_Infinite.Apps.Admin.Common.Models;

namespace Edu_Infinite.Apps.Admin.Common
{
   public class MapperProfile:Profile
   {
        public MapperProfile()
        {
         CreateMap<CourseCreateReqDto, CourseInsertDto>().ReverseMap();
        }
    }
}
