using Ardalis.Specification;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.SharedKernel.Specifications;

namespace Edu_Infinite.Course.Core.Specs
{
   public class CourseListFilterSpec : BasePaginationSpec<CourseDefinition>
   {
      public CourseListFilterSpec(int pageNumber, int pageSize, string categoryId=null, bool filterIsActive = true) : base(pageNumber, pageSize, filterIsActive)
      {
         if (categoryId is not null)
            Query.Where(i => i.CategoryId == Guid.Parse(categoryId));
         Query.Include("Category");
      }
   }
}
