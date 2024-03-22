using Edu_Infinit.Course.Core.Aggregates.Category;
using FluentValidation;

namespace Edu_Infinite.Course.Core.Aggregates.Category.Validators
{
	internal class CourseCategoryValidator : AbstractValidator<CourseCategory>
	{
		public CourseCategoryValidator()
		{
			RuleFor(i => i.Id).NotEmpty();
			RuleFor(i => i.Name).NotEmpty();
		}
	}
}
