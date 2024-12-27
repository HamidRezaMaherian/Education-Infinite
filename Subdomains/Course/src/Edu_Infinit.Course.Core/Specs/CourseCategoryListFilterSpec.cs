using Ardalis.Specification;
using Edu_Infinit.Course.Core.Aggregates.Category;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.SharedKernel.Specifications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Edu_Infinite.Course.Core.Specs
{
   public class CourseCategoryListFilterSpec : BasePaginationSpec<CourseCategory>
   {
      public CourseCategoryListFilterSpec(int pageNumber, int pageSize, bool filterIsActive = true) : base(pageNumber, pageSize, filterIsActive)
      {
         Query.Where(i => i.ParentId == null).Include(i => i.SubCategories);
      }
   }
}
