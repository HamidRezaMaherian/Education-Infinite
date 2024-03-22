namespace Edu_Infinite.SharedKernel
{
	public interface IEventPublisher
	{
		void Publish(BaseEvent event2Publish);
	}
}