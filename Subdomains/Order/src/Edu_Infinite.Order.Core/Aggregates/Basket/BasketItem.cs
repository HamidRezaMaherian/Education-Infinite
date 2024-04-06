using Edu_Infinite.SharedKernel;

namespace Edu_Infinite.Order.Core.Aggregates.Basket
{
   public class BasketItem : BaseEntity<Guid>
   {
      public Guid ItemId { get; set; }
   }
}