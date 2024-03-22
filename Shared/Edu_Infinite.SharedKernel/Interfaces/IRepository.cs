using Ardalis.Specification;

namespace Edu_Infinite.SharedKernel.Interfaces
{
	public interface IRepository<T> : IRepositoryBase<T> where T : class, IAggregateRoot
	{}
}
