using FluentValidation;

namespace Edu_Infinite.Course.Core.Aggregates.Course.Validators
{
   internal class CourseSectionValidator : AbstractValidator<CourseSection>
	{
		public CourseSectionValidator()
		{
			RuleFor(i => i.Id).NotEmpty();
			RuleFor(i => i.Name).NotEmpty().MaximumLength(200);
		}
   }
}
