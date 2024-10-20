using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.SharedKernel.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Edu_Infinite.Course.Core.Interfaces
{
   public interface ICourseRepository : IRepository<CourseDefinition>
   {
      Task<CourseSection> AddSection(CourseSection section, CancellationToken cancellationToken = default);
      Task<CourseContent> AddContent(CourseContent content, CancellationToken cancellationToken = default);
   }
}
