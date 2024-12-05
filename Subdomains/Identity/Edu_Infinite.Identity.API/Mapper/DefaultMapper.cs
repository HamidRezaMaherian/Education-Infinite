using AutoMapper;
using Edu_Infinite.Identity.API.Models;
using Edu_Infinite.Identity.Shared.Dtos;

namespace Edu_Infinite.Identity.API.Mapper
{
	public class DefaultMapper : Profile
	{
		public DefaultMapper()
		{
			CreateMap<Instructor, InstructorDto>().ReverseMap();
		}
	}
}
