﻿using Edu_Infinite.Course.Core.Aggregates.Category.Validators;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using FluentValidation;

namespace Edu_Infinit.Course.Core.Aggregates.Category
{
	public class CourseCategory : BaseEntity<Guid>, IAggregateRoot
	{
		private readonly CourseCategoryValidator _validator = new();
		public CourseCategory(string name, Guid? parentId)
		{
			Name = name;
			ParentId = parentId;
			_validator.ValidateAndThrow(this);
		}

		public string Name { get; private set; }
		public Guid? ParentId { get; private set; }
		public ICollection<CourseDefinition> Courses { get; private set; }
		public ICollection<CourseCategory> SubCategories { get; private set; }
	}
}
