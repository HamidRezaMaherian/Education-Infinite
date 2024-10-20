using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;

namespace Edu_Infinite.Order.Core.Aggregates.Basket
{
   public class BasketDefinition : BaseEntity<Guid>, IAggregateRoot
   {
      public ICollection<BasketItem> Items { get; private set; }
      public decimal TotalPrice { get; private set; }


      //TODO:Coupons
      public void SaveCourse()
      {
         _events.Add(new EntitySavedEvent<BasketDefinition>(this));
      }
   }
}
