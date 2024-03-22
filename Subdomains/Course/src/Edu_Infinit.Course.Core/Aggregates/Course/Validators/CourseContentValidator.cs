using Edu_Infinite.Course.Core.Aggregates.Course;
using FluentValidation;

namespace Edu_Infinite.Course.Core.Aggregates.Course.Validators
{
	internal class CourseContentValidator : AbstractValidator<CourseContent>
	{
		public CourseContentValidator()
		{
			RuleFor(i => i.Id).NotEmpty();
			RuleFor(i => i.Title).NotEmpty().MaximumLength(200);
			RuleFor(i => i.Type).NotNull();
			RuleFor(i => i.Content).NotNull();
		}
	}
}
