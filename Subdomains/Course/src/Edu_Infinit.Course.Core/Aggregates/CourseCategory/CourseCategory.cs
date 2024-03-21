using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;

namespace Edu_Infinit.Course.Core.Aggregates.CourseCategory
{
    public class CourseCategory : BaseEntity<string>, IAggregateRoot
    {
        public CourseCategory(string name, string? parentId)
        {
            Name = name;
            ParentId = parentId;
        }

        public string Name { get; private set; }
        public string? ParentId { get; private set; }
    }
}
