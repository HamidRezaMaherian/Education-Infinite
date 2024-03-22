using Edu_Infinite.Course.Core.Aggregates.Category.Validators;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using FluentValidation;

namespace Edu_Infinit.Course.Core.Aggregates.Category
{
	public class CourseCategory : BaseEntity<string>, IAggregateRoot
	{
		private readonly CourseCategoryValidator _validator = new();
		public CourseCategory(string name, string? parentId)
		{
			Name = name;
			ParentId = parentId;

			_validator.ValidateAndThrow(this);
		}

		public string Name { get; private set; }
		public string? ParentId { get; private set; }
	}
}
