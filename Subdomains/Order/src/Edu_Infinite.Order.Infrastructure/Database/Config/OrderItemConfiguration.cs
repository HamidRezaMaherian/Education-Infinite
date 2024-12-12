using Edu_Infinite.Course.Infrastructure.Database.Config;
using Edu_Infinite.Order.Core.Aggregates.Order;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Edu_Infinite.Order.Infrastructure.Database.Config
{
   internal class OrderItemConfiguration : BaseConfiguration<OrderItem, int>
   {
      public override void Configure(EntityTypeBuilder<OrderItem> builder)
      {
         base.Configure(builder);
         builder.Property(i => i.ItemId).IsRequired();
      }
   }
}
