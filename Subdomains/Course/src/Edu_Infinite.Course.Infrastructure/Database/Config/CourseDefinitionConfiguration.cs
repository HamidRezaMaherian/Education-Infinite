using Edu_Infinite.SharedKernel;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinit.Course.Core.Aggregates.Category;

namespace Edu_Infinite.Course.Infrastructure.Database.Config
{
	internal class CourseDefinitionConfiguration : BaseConfiguration<CourseDefinition, Guid>
	{
		public override void Configure(EntityTypeBuilder<CourseDefinition> builder)
		{
			base.Configure(builder);
			builder.Property(i => i.Name).IsRequired().HasMaxLength(200);
			builder.Property(i => i.FullPrice).IsRequired();
			builder.HasOne<CourseCategory>().WithMany(i => i.Courses).HasForeignKey(i => i.CategoryId).IsRequired();
			builder.Property(i => i.CreatedDateTime).IsRequired();
			builder.Property(i => i.Description).IsRequired();
			builder.Property(i => i.ShortDescription).HasMaxLength(500).IsRequired();
			builder.Property(i => i.Level).IsRequired();
			builder.Property(i => i.MainImage.ToString()).IsRequired();
			builder.Property(i => i.IntroVideo.ToString()).IsRequired(false);
		}
	}
}
