using Edu_Infinite.Course.Core.Aggregates.Course.Validators;
using Edu_Infinite.Course.Core.Aggregates.Constants;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using Edu_Infinite.SharedKernel.ValueObjects;
using FluentValidation;
using Edu_Infinite.Course.Core.Aggregates.Course.Events;
using Edu_Infinit.Course.Core.Aggregates.Category;

namespace Edu_Infinite.Course.Core.Aggregates.Course
{
	public class CourseDefinition : BaseEntity<Guid>, IAggregateRoot
	{
		private static CourseDefinitionValidator _valiator = new();
		public CourseDefinition(Guid id, string name, string shortDescription, string description, decimal fullPrice, Blob mainImage, Blob introVideo, Guid categoryId, Guid instructorId, SkillLevel level)
		{
			Id = id;
			Name = name;
			ShortDescription = shortDescription;
			Description = description;
			FullPrice = fullPrice;
			MainImage = mainImage;
			IntroVideo = introVideo;
			Level = level;
			CategoryId = categoryId;
			InstructorId = instructorId;
			_valiator.ValidateAndThrow(this);
		}
		public CourseDefinition(string name, string shortDescription, Guid instructorId, string description, decimal fullPrice, Blob mainImage, Blob introVideo, Guid categoryId, SkillLevel level) : this(new Guid(), name, shortDescription, description, fullPrice, mainImage, introVideo, categoryId, instructorId, level)
		{

		}

		public string Name { get; private set; }
		public string ShortDescription { get; private set; }
		public string Description { get; private set; }
		public decimal FullPrice { get; private set; }

		public Blob MainImage { get; private set; }

		public Blob IntroVideo { get; private set; }

		public SkillLevel Level { get; private set; }
		public Guid CategoryId { get; private set; }
		public Guid InstructorId { get; init; }
		public CourseCategory Category { get; private set; }

		private IList<CourseSection> _sections;
		public ICollection<CourseSection> Sections => _sections.AsReadOnly();

		public CourseDefinition AddSection(CourseSection section)
		{
			_valiator.ValidateNewSection(this, section);
			Sections.Add(section);
			_events.Add(new NewCourseSectionAddedEvent(section, Id));
			return this;
		}
		public CourseDefinition SetLevel(SkillLevel level)
		{
			Level = level;
			return this;
		}
		public CourseDefinition SetMainImage(Blob image)
		{
			MainImage = image;
			return this;
		}
		public CourseDefinition SetVideo(Blob introVideo)
		{
			IntroVideo = introVideo;
			return this;
		}
		public CourseDefinition SetShortDescription(string shortDesc)
		{
			ShortDescription = shortDesc;
			return this;
		}
		public CourseDefinition SetDescription(string description)
		{
			Description = description;
			return this;
		}
		public CourseDefinition SetPrice(decimal price)
		{
			FullPrice = price;
			return this;
		}
		public void SaveCourse()
		{
			_valiator.Validate(this);
			_events.Add(new EntitySavedEvent<CourseDefinition>(this));
		}
	}
}
