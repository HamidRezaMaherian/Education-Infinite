using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.Course.Core.Aggregates.Course.Events;
using Edu_Infinite.Course.Core.Interfaces;
using Edu_Infinite.SharedKernel;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Edu_Infinite.Course.Infrastructure.Handlers
{
   internal class ContentAddedEventHandler : IRequestHandler<ContentAddedEvent, TransactionResult<CourseContent>>
   {
      private readonly ICourseRepository repository;

      public ContentAddedEventHandler(IServiceProvider provider)
      {
         this.repository = provider.CreateScope().ServiceProvider.GetService<ICourseRepository>()!;
      }

      public async Task<TransactionResult<CourseContent>> Handle(ContentAddedEvent request, CancellationToken cancellationToken)
      {
         var transactionRes = new TransactionResult<CourseContent>();
         transactionRes.Model = await repository.AddContent(request.Content, cancellationToken);
         transactionRes.IsSuccessfull = true;
         return transactionRes;
      }
   }
}
