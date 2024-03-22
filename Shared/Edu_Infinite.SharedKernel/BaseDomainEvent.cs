using MediatR;

namespace Edu_Infinite.SharedKernel
{
	public abstract class BaseDomainEvent : BaseEvent, INotification
	{
	}
}