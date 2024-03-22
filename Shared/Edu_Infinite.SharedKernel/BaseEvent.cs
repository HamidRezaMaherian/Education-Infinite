namespace Edu_Infinite.SharedKernel
{
	public class BaseEvent
	{
		public DateTimeOffset DateOccurred { get; protected set; } = DateTimeOffset.UtcNow;
	}
}