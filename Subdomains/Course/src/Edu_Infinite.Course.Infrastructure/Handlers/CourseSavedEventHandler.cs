﻿using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.Course.Core.Aggregates.Course.Events;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Edu_Infinite.Course.Infrastructure.Handlers
{
   internal class CourseSavedEventHandler : IRequestHandler<CourseSavedEvent, TransactionResult<CourseDefinition>>
   {
      private readonly IRepository<CourseDefinition> repository;

      public CourseSavedEventHandler(IServiceProvider provider)
      {
         this.repository = provider.CreateScope().ServiceProvider.GetService<IRepository<CourseDefinition>>()!;
      }
      public async Task<TransactionResult<CourseDefinition>> Handle(CourseSavedEvent request, CancellationToken cancellationToken)
      {
         var transactionRes = new TransactionResult<CourseDefinition>();
         transactionRes.Model = await repository.AddAsync(request.Course, cancellationToken);
         return transactionRes;
      }
   }
}
