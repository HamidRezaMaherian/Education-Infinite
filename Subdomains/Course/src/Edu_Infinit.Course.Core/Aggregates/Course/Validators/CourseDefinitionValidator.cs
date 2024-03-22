using Edu_Infinite.Course.Core.Aggregates.Course;
using FluentValidation;

namespace Edu_Infinite.Course.Core.Aggregates.Course.Validators
{
	internal class CourseDefinitionValidator : AbstractValidator<CourseDefinition>
	{
		public CourseDefinitionValidator()
		{
			RuleFor(i => i.Id).NotEmpty();
			RuleFor(i => i.Name).NotEmpty().MaximumLength(200);
			RuleFor(i => i.ShortDescription).NotEmpty().MaximumLength(500);
			RuleFor(i => i.Description).NotEmpty();
			RuleFor(i => i.IntroVideo).NotNull();
			RuleFor(i => i.FullPrice).Must(v => v >= 0);
			RuleFor(i => i.CategoryId).NotEmpty();
			RuleFor(i => i.Level).NotNull();
			RuleFor(i => i.MainImage).NotNull();
		}
	}
}
