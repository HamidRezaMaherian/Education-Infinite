using Ardalis.Specification;
using Ardalis.Specification.EntityFrameworkCore;
using Edu_Infinite.SharedKernel.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Edu_Infinite.Order.Infrastructure.Database.Repositories
{
	internal class EfRepository<T> : RepositoryBase<T>, IRepository<T> where T : class, IAggregateRoot
    {
        public EfRepository(OrderAppDbContext dbContext) : base(dbContext)
        {
        }
    }
}
