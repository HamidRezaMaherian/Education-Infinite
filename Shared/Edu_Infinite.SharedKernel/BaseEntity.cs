namespace Edu_Infinite.SharedKernel
{
	public interface IBaseActive
	{
		public bool IsActive { get; set; }
	}
	public abstract class EntityPrimaryBase<T>
	{
		public List<BaseDomainEvent> Events = new List<BaseDomainEvent>();
		public virtual T Id { get; set; }
		public DateTime CreatedDateTime { get; private set; }
	}
	public abstract class BaseEntity<T> : EntityPrimaryBase<T>, IBaseActive
	{
		public bool IsActive { get; set; }
	}
}
