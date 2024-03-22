using Edu_Infinite.Course.Core.Aggregates.Course.Validators;
using Edu_Infinite.SharedKernel;
using FluentValidation;

namespace Edu_Infinite.Course.Core.Aggregates.Course
{
	public class CourseSection : BaseEntity<int>
	{
		private readonly CourseSectionValidator _validator = new();
		public CourseSection(string name, ICollection<CourseContent> contents)
		{
			Name = name;
			Contents = contents;
			_validator.ValidateAndThrow(this);
		}

		public string Name { get; private set; }
		public ICollection<CourseContent> Contents { get; private set; }
	}
}