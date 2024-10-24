using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.Course.Core.Interfaces;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Edu_Infinite.Course.Infrastructure.Handlers
{
   internal class CourseSavedEventHandler : IRequestHandler<EntitySavedEvent<CourseDefinition>, TransactionResult<CourseDefinition>>
   {
      private readonly ICourseRepository repository;

      public CourseSavedEventHandler(IServiceProvider provider)
      {
         this.repository = provider.CreateScope().ServiceProvider.GetService<ICourseRepository>()!;
      }
      public async Task<TransactionResult<CourseDefinition>> Handle(EntitySavedEvent<CourseDefinition> request, CancellationToken cancellationToken)
      {
         var transactionRes = new TransactionResult<CourseDefinition>();
         transactionRes.Model = await repository.AddAsync(request.Entity, cancellationToken);
         transactionRes.IsSuccessfull = true;
         return transactionRes;
      }
   }
}
