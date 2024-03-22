using Ardalis.Specification;
using Edu_Infinite.SharedKernel.Interfaces;

namespace Edu_Infinite.SharedKernel
{
	public interface IQueryRepository<T> : IReadRepositoryBase<T> where T : class, IAggregateRoot
	{}
}
