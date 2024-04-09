using FluentValidation;

namespace Edu_Infinite.Order.Core.Aggregates.Basket.Validators
{
	internal class BasketDefinitionValidator : AbstractValidator<BasketDefinition>
	{
		public BasketDefinitionValidator()
		{
			RuleFor(i => i.Id).NotEmpty();
		}
	}
}
