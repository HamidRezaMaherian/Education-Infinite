using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.Course.Core.Aggregates.Course.Events;
using Edu_Infinite.Course.Core.Interfaces;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Edu_Infinite.Course.Infrastructure.Handlers
{
   internal class NewCourseCommentAddedEventHandler : IRequestHandler<NewCourseCommentAddedEvent, TransactionResult<CourseComment>>
   {
      private readonly ICourseRepository repository;

      public NewCourseCommentAddedEventHandler(IServiceProvider provider)
      {
         this.repository = provider.CreateScope().ServiceProvider.GetService<ICourseRepository>()!;
      }

      public async Task<TransactionResult<CourseComment>> Handle(NewCourseCommentAddedEvent request, CancellationToken cancellationToken)
      {
         var transactionRes = new TransactionResult<CourseComment>();
         transactionRes.Model = await repository.AddComment(request.Comment, cancellationToken);
         transactionRes.IsSuccessfull = true;
         return transactionRes;
      }
   }
}
