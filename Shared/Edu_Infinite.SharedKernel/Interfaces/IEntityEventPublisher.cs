using Edu_Infinite.SharedKernel.Interfaces;

namespace Edu_Infinite.SharedKernel
{
	public interface IEntityEventPublisher<T> where T : BaseEntity
	{
		void SaveAndPublish(T entity);
	}
}