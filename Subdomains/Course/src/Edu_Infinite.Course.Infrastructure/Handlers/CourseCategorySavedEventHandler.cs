using Edu_Infinit.Course.Core.Aggregates.Category;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.Course.Core.Interfaces;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace Edu_Infinite.Course.Infrastructure.Handlers
{
	internal class CourseCategorySavedEventHandler : IRequestHandler<EntitySavedEvent<CourseCategory>, TransactionResult<CourseCategory>>
	{
		private readonly IRepository<CourseCategory> repository;

		public CourseCategorySavedEventHandler(IServiceProvider provider)
		{
			this.repository = provider.CreateScope().ServiceProvider.GetService<IRepository<CourseCategory>>()!;
		}
		public async Task<TransactionResult<CourseCategory>> Handle(EntitySavedEvent<CourseCategory> request, CancellationToken cancellationToken)
		{
			var transactionRes = new TransactionResult<CourseCategory>();
			transactionRes.Model = await repository.AddAsync(request.Entity, cancellationToken);
			transactionRes.IsSuccessfull = true;
			return transactionRes;
		}
	}
}
