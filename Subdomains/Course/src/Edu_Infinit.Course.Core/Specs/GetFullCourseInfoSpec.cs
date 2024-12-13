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
	public class GetFullCourseInfoSpec : SingleResultSpecification<CourseDefinition>
	{
		public GetFullCourseInfoSpec(string id)
		{
			Query.Where(i => i.Id.ToString().Equals(id)).Include(i=>i.Comments).Include(i=>i.Category).Include(i => i.Sections).ThenInclude(i => i.Contents);
		}
	}
}
