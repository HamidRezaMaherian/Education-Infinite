using Edu_Infinite.SharedKernel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Edu_Infinite.Order.Core.Aggregates.Order.Events
{
   public class NewOrderItemAddedEvent : BaseDomainEvent, ITransactionRequest<OrderItem>
   {
      public OrderItem Item { get; private set; }
      public Guid OrderId { get; private set; }

      internal NewOrderItemAddedEvent(OrderItem item, Guid courseId)
      {
         Item = item;
         OrderId = courseId;
      }

   }
}
