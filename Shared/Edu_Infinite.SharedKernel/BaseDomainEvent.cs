using MediatR;

namespace Edu_Infinite.SharedKernel
{
	public abstract class BaseDomainEvent : INotification
	{
		public DateTimeOffset DateOccurred { get; protected set; } = DateTimeOffset.UtcNow;
	}
}