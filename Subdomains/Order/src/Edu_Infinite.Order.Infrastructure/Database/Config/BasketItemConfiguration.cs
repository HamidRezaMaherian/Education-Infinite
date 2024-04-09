using Edu_Infinite.Course.Infrastructure.Database.Config;
using Edu_Infinite.Order.Core.Aggregates.Basket;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Edu_Infinite.Order.Infrastructure.Database.Config
{
	internal class BasketItemConfiguration : BaseConfiguration<BasketItem, int>
	{
		public override void Configure(EntityTypeBuilder<BasketItem> builder)
		{
			base.Configure(builder);
			builder.Property(i => i.ItemId).IsRequired();
		}
	}
}
