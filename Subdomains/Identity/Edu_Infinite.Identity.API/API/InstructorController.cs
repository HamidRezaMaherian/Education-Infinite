using AutoMapper;
using Edu_Infinite.Identity.API.Models;
using Edu_Infinite.Identity.Shared;
using Edu_Infinite.Identity.Shared.Dtos;
using Microsoft.AspNetCore.Components.Forms.Mapping;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Edu_Infinite.Identity.API.API
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class InstructorController : ControllerBase
	{
		private readonly UserManager<ApplicationUser> userManager;
		private readonly IMapper mapper;

		public InstructorController(UserManager<ApplicationUser> userManager, IMapper mapper)
		{
			this.userManager = userManager;
			this.mapper = mapper;
		}
		[HttpGet("{userName}")]
		public async Task<IActionResult> GetByUserName(string? userName)
		{
			if (userName is null)
			{
				var users = await userManager.Users.OfType<IdentityUser>().ToListAsync();
				return Ok(mapper.Map<List<InstructorDto>>(users));
			}
			else
			{
				var user = await userManager.Users.OfType<IdentityUser>().FirstOrDefaultAsync(i => i.UserName == userName);
				return Ok(mapper.Map<InstructorDto>(user));
			}
		}
	}
}
