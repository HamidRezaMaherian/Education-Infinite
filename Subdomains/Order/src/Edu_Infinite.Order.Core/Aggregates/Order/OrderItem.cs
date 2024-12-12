using Edu_Infinite.SharedKernel;

namespace Edu_Infinite.Order.Core.Aggregates.Order
{
   public class OrderItem : BaseEntity<int>
   {
      public Guid ItemId { get; set; }
      public Guid OrderId { get; set; }
   }
}