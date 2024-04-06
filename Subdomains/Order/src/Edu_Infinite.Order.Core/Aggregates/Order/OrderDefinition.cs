using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;

namespace Edu_Infinite.Order.Core.Aggregates.Order
{
   public class OrderDefinition:BaseEntity<string>, IAggregateRoot
   {
        public Guid BasketId { get; set; }
        public decimal TotalPrice { get; set; }
    }
}
