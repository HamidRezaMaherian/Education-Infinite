using Edu_Infinite.Course.Infrastructure.Database.Config;
using Edu_Infinite.Order.Core.Aggregates.Basket;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Edu_Infinite.Order.Infrastructure.Database.Config
{
	internal class BasketDefinitionConfiguration : BaseConfiguration<BasketDefinition, Guid>
	{
		public override void Configure(EntityTypeBuilder<BasketDefinition> builder)
		{
			base.Configure(builder);
			builder.Property(i => i.TotalPrice).IsRequired().HasPrecision(3);
		}
	}
}
