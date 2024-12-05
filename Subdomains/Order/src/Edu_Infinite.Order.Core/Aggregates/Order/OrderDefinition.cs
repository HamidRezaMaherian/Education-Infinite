using Edu_Infinite.Order.Core.Aggregates.Order.Events;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using System.Xml.Linq;

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

      private IList<OrderItem> _items;
      public ICollection<OrderItem> Items => _items.AsReadOnly();

      public OrderDefinition AddItem(OrderItem item)
      {
         //_valiator.ValidateNewSection(this, section);
         _items.Add(item);
         _events.Add(new NewOrderItemAddedEvent(item, Id));
         return this;
      }

      public void SaveCourse()
      {
         _events.Add(new EntitySavedEvent<OrderDefinition>(this));
      }
   }
}
