using Edu_Infinite.Course.Core.Aggregates.Constants;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using Edu_Infinite.SharedKernel.ValueObjects;

namespace Edu_Infinite.Course.Core.Aggregates.Course
{
	public class CourseDefinition : BaseEntity<Guid>, IAggregateRoot
	{
		public string Name { get; private set; }
		public string ShortDescription { get; private set; }
		public string Description { get; private set; }
		public decimal UnitPrice { get; private set; }

		public Blob MainImage { get; private set; }

		public Blob IntroVideo { get; private set; }

		public Guid CategoryId { get; private set; }

		public SkillLevel Level { get; private set; }

		public ICollection<CourseSection> Sections { get; private set; }
	}
}
