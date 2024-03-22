using Edu_Infinite.SharedKernel;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace Edu_Infinite.Course.Infrastructure.Database.Config
{
	internal abstract class BaseConfiguration<T, TId> : IEntityTypeConfiguration<T> where T : BaseEntity<TId>
	{
		public virtual void Configure(EntityTypeBuilder<T> builder)
		{
			builder.HasKey(x => x.Id);
			builder.Property(x => x.CreatedDateTime).IsRequired();
			builder.Property<bool>("IsDelete");
			builder.Ignore(i => i.Events);
		}
	}
}
