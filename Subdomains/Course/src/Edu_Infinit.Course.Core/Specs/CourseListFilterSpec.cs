using Ardalis.Specification;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.SharedKernel.Specifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Edu_Infinite.Course.Core.Specs
{
   public class CourseListFilterSpec : BasePaginationSpec<CourseDefinition>
   {
      public CourseListFilterSpec(int pageNumber, int pageSize) : base(pageNumber, pageSize)
      {
         Query.Include("Category");
      }
   }
}
