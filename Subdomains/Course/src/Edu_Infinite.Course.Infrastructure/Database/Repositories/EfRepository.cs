using Ardalis.Specification;
using Ardalis.Specification.EntityFrameworkCore;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Edu_Infinite.Course.Infrastructure.Database.Repositories
{
   internal class EfRepository<T> : RepositoryBase<T>, IRepository<T>, IQueryRepository<T> where T : class, IAggregateRoot
   {
      public EfRepository(CourseAppDbContext dbContext) : base(dbContext)
      {
      }
   }
}
