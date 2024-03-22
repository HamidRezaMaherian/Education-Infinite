using Edu_Infinit.Course.Core.Constants;
using Edu_Infinite.Course.Core.Aggregates.Course.Validators;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.ValueObjects;
using FluentValidation;

namespace Edu_Infinite.Course.Core.Aggregates.Course
{
	public class CourseContent : BaseEntity<int>
	{
		private readonly CourseContentValidator _validator = new();
		public CourseContent(string title, ContentType type, Blob content)
		{
			Title = title;
			Type = type;
			Content = content;
			_validator.ValidateAndThrow(this);
		}

		public string Title { get; private set; }
		public ContentType Type { get; private set; }
		public Blob Content { get; private set; }
	}
}
