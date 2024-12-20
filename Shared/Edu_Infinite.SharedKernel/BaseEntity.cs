﻿using MediatR;

namespace Edu_Infinite.SharedKernel
{
	public interface IBaseActive
	{
		public bool IsActive { get; set; }
	}

	public abstract class BaseEntity : IBaseActive
	{
		protected readonly List<BaseDomainEvent> _events = new List<BaseDomainEvent>();
		public IList<BaseDomainEvent> Events => _events.AsReadOnly();
		public DateTime CreatedDateTime { get; private set; }
		public bool IsActive { get; set; } = true;
	}
	public abstract class BaseEntity<T> : BaseEntity, IBaseActive
	{
		public virtual T Id { get; set; }
	}
}
