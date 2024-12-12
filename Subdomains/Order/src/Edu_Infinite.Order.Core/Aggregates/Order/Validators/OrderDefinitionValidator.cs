using Edu_Infinite.Order.Core.Aggregates.Order;
using FluentValidation;

namespace Edu_Infinite.Order.Core.Aggregates.Order.Validators
{
	internal class OrderDefinitionValidator : AbstractValidator<OrderDefinition>
	{
		public OrderDefinitionValidator()
		{
			RuleFor(i => i.Id).NotEmpty();
      }
	}
}
