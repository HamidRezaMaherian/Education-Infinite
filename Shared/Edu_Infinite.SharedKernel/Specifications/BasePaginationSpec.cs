using Ardalis.Specification;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Edu_Infinite.SharedKernel.Specifications
{
   public class BasePaginationSpec<T> : Specification<T> where T : BaseEntity
   {
      public BasePaginationSpec(int pageNumber, int pageSize)
      {
         Query.Where(i => i.IsActive).Skip((pageNumber - 1) * pageSize).Take(pageSize);
      }
   }
}
