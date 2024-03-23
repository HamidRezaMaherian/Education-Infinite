using Edu_Infinite.Course.Core.Aggregates.Course.Validators;
using Edu_Infinite.Course.Core.Aggregates.Constants;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using Edu_Infinite.SharedKernel.ValueObjects;
using FluentValidation;

namespace Edu_Infinite.Course.Core.Aggregates.Course
{
   public class CourseDefinition : BaseEntity<Guid>, IAggregateRoot
   {
      private static CourseDefinitionValidator _valiator = new();
      public CourseDefinition(Guid id, string name, string shortDescription, string description, decimal fullPrice, Blob mainImage, Blob introVideo, Guid categoryId, SkillLevel level)
      {
         Id = id;
         Name = name;
         ShortDescription = shortDescription;
         Description = description;
         FullPrice = fullPrice;
         MainImage = mainImage;
         IntroVideo = introVideo;
         CategoryId = categoryId;
         Level = level;

         _valiator.ValidateAndThrow(this);
      }

      public string Name { get; private set; }
      public string ShortDescription { get; private set; }
      public string Description { get; private set; }
      public decimal FullPrice { get; private set; }

      public Blob MainImage { get; private set; }

      public Blob IntroVideo { get; private set; }

      public Guid CategoryId { get; private set; }

      public SkillLevel Level { get; private set; }

      public ICollection<CourseSection> Sections { get; private set; }
   }
}
