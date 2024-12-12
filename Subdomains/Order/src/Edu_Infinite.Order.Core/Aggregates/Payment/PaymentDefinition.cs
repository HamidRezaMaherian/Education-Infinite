using Edu_Infinite.SharedKernel.Interfaces;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.Order.Core.Aggregates.Order;

namespace Edu_Infinite.Order.Core.Aggregates.Payment
{
   internal class PaymentDefinition : BaseEntity<Guid>, IAggregateRoot
   {
      public void SaveCourse()
      {
         _events.Add(new EntitySavedEvent<PaymentDefinition>(this));
      }
   }
}
