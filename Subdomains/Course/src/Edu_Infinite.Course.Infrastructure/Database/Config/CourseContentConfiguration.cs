using Edu_Infinite.SharedKernel;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinit.Course.Core.Aggregates.Category;

namespace Edu_Infinite.Course.Infrastructure.Database.Config
{
	internal class CourseContentConfiguration : BaseConfiguration<CourseContent, int>
	{
		public override void Configure(EntityTypeBuilder<CourseContent> builder)
		{
			base.Configure(builder);
			builder.Property(i => i.Title).IsRequired();
			builder.Property(i => i.Type).IsRequired();
			builder.Property(i => i.Content.ToString()).IsRequired();
			builder.HasOne<CourseSection>().WithMany(i => i.Contents).HasForeignKey(i => i.SectionId).IsRequired();
		}
	}
}
