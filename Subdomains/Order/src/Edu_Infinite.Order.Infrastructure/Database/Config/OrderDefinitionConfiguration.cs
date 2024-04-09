﻿using Edu_Infinite.Course.Infrastructure.Database.Config;
using Edu_Infinite.Order.Core.Aggregates.Basket;
using Edu_Infinite.Order.Core.Aggregates.Order;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Edu_Infinite.Order.Infrastructure.Database.Config
{
   internal class OrderDefinitionConfiguration : BaseConfiguration<OrderDefinition, Guid>
   {
      public override void Configure(EntityTypeBuilder<OrderDefinition> builder)
      {
         base.Configure(builder);
         builder.Property(i => i.TotalPrice).HasPrecision(3).IsRequired();
         builder.HasOne<BasketDefinition>().WithOne().HasForeignKey<OrderDefinition>(i => i.BasketId);
      }
   }
}
