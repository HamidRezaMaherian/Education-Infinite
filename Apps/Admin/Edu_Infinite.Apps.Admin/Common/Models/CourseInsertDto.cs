using Edu_Infinite.Course.Core.Aggregates.Constants;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Edu_Infinite.Apps.Admin.Common.Models
{
	public class CourseInsertDto
	{
		[Required]
		public string Name { get; set; }

		[Required]
		public string ShortDescription { get; set; }

		[Required]
		public string Description { get; set; }

		[Required]
		[Range(0, double.MaxValue, ErrorMessage = "Price must be a positive number.")]
		public decimal FullPrice { get; set; }

		[Required]
		public string CategoryId { get; set; }

		[Required]
		public SkillLevel Level { get; set; }

		[BindProperty]
		[Required(ErrorMessage = "Main image is required.")]
		public IFormFile MainImage { get; set; }

		[BindProperty]
		[Required(ErrorMessage = "Intro video is required.")]
		public IFormFile IntroVideo { get; set; }

	}
}
