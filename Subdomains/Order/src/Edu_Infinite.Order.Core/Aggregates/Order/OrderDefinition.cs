using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;

namespace Edu_Infinite.Order.Core.Aggregates.Order
{
   public class OrderDefinition : BaseEntity<Guid>, IAggregateRoot
   {
      public OrderDefinition(Guid basketId)
      {
         BasketId = basketId;
      }

      public Guid BasketId { get; set; }
      public decimal TotalPrice { get; set; }

      public void SaveCourse()
      {
         _events.Add(new EntitySavedEvent<OrderDefinition>(this));
      }
   }
}
