using Edu_Infinite.Api.Shared.Dtos.Course;
using FluentValidation;
using Edu_Infinite.Api.Shared.Utils;
namespace Edu_Infinite.Api.Validators.Course
{
   public class CourseReqDtoValidator : AbstractValidator<CourseCreateReqDto>
   {
      public CourseReqDtoValidator()
      {
         RuleFor(i => i.IntroVideo).NotEmpty();
         RuleFor(i => i.MainImage).UrlOrBase64().NotEmpty();
         RuleFor(i => i.IntroVideo).UrlOrBase64().NotEmpty();
         RuleFor(i => i.ShortDescription).NotEmpty();
         RuleFor(i => i.Name).NotEmpty();
         RuleFor(i => i.FullPrice).NotEmpty();
      }
   }
}
