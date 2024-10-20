namespace Edu_Infinite.SharedKernel
{
   public class EntitySavedEvent<T> : BaseDomainEvent, ITransactionRequest<T> where T : BaseEntity
   {
      public T Entity { get; private set; }

      public EntitySavedEvent(T entity)
      {
         Entity = entity;
      }
   }
}
