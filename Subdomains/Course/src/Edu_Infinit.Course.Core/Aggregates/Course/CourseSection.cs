using Edu_Infinite.Course.Core.Aggregates.Course.Events;
using Edu_Infinite.Course.Core.Aggregates.Course.Validators;
using Edu_Infinite.SharedKernel;
using FluentValidation;

namespace Edu_Infinite.Course.Core.Aggregates.Course
{
   public class CourseSection : BaseEntity<int>
   {
      private readonly CourseSectionValidator _validator = new();
      public CourseSection(string name, Guid definitionId = default)
      {
         //_validator.ValidateAndThrow(this);
         Name = name;
         DefinitionId = definitionId;
      }
      public CourseSection(int id, string name, Guid definitionId = default) : this(name,definitionId)
      {
         Id = id;
      }
      public Guid DefinitionId { get; private set; }
      public string Name { get; private set; }
      public ICollection<CourseContent> Contents { get; private set; }

      public void AddContent(CourseContent content)
      {
         _events.Add(new ContentAddedEvent(Id,content));
      }
   }
}