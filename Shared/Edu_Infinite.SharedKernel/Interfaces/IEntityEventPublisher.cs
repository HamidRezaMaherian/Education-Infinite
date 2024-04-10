using Edu_Infinite.SharedKernel.Interfaces;

namespace Edu_Infinite.SharedKernel
{
   public interface IEntityEventPublisher
   {
      Task Publish<T>(T entity) where T : BaseEntity;
   }
}