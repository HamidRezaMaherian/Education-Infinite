using Ardalis.Specification;
using Ardalis.Specification.EntityFrameworkCore;
using Edu_Infinite.SharedKernel.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Edu_Infinite.Course.Infrastructure.Database.Repositories
{
    internal class EfRepository<T> : RepositoryBase<T>, IRepository<T> where T : class, IAggregateRoot
    {
        public EfRepository(DbContext dbContext) : base(dbContext)
        {
        }
        public EfRepository(DbContext dbContext, ISpecificationEvaluator specificationEvaluator) : base(dbContext, specificationEvaluator)
        {
        }
    }
}
