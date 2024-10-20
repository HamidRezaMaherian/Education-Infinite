using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.Course.Core.Aggregates.Course.Events;
using Edu_Infinite.Course.Core.Interfaces;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Edu_Infinite.Course.Infrastructure.Handlers
{
   internal class NewCourseSectionAddedEventHandler : IRequestHandler<NewCourseSectionAddedEvent, TransactionResult<CourseSection>>
   {
      private readonly ICourseRepository repository;

      public NewCourseSectionAddedEventHandler(IServiceProvider provider)
      {
         this.repository = provider.CreateScope().ServiceProvider.GetService<ICourseRepository>()!;
      }

      public async Task<TransactionResult<CourseSection>> Handle(NewCourseSectionAddedEvent request, CancellationToken cancellationToken)
      {
         var transactionRes = new TransactionResult<CourseSection>();
         transactionRes.Model = await repository.AddSection(request.Section, cancellationToken);
         transactionRes.IsSuccessfull = true;
         return transactionRes;
      }
   }
}
