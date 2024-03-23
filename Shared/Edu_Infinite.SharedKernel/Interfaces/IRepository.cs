using Ardalis.Specification;

namespace Edu_Infinite.SharedKernel.Interfaces
{
   public interface IRepository<T> : IReadRepositoryBase<T>, IRepositoryBase<T> where T : class, IAggregateRoot
   { }
}
