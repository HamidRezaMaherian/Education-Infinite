using Edu_Infinite.Course.Core.Aggregates.Category.Validators;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.SharedKernel;
using Edu_Infinite.SharedKernel.Interfaces;
using FluentValidation;

namespace Edu_Infinit.Course.Core.Aggregates.Category
{
   public class CourseCategory : BaseEntity<Guid>, IAggregateRoot
   {
      private readonly CourseCategoryValidator _validator = new();
      public CourseCategory(Guid id, string name, Guid? parentId)
      {
         Id = id;
         Name = name;
         ParentId = parentId;
         _validator.ValidateAndThrow(this);
      }

      public string Name { get; private set; }
      public Guid? ParentId { get; private set; }
      public ICollection<CourseDefinition> Courses { get; private set; }
      public ICollection<CourseCategory> SubCategories { get; private set; }

      public void SaveCourse()
      {
         _validator.Validate(this);
         _events.Add(new EntitySavedEvent<CourseCategory>(this));
      }
   }
}
