using Edu_Infinite.SharedKernel;
using MediatR;

namespace Edu_Infinite.Course.Infrastructure.Services
{
   internal class CourseEntityEventPublisher : IEntityEventPublisher
   {
      private readonly IMediator mediator;

      public CourseEntityEventPublisher(IMediator mediator)
      {
         this.mediator = mediator;
      }
      public async Task Publish<T>(T entity) where T : BaseEntity
      {
         foreach (var item in entity.Events)
         {
            if (item is ITransactionRequest<TransactionResult<T>>)
            {
               var res = await mediator.Send((item as ITransactionRequest<TransactionResult<T>>)!);
               if (res.IsSuccessfull)
               {
                  mediator.Publish(res.Model);
               }
            }
            else
               mediator.Publish(item);
         }
      }
   }
}
