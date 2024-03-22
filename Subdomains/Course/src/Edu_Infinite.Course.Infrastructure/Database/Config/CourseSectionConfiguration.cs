using Edu_Infinite.SharedKernel;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinit.Course.Core.Aggregates.Category;

namespace Edu_Infinite.Course.Infrastructure.Database.Config
{
	internal class CourseSectionConfiguration : BaseConfiguration<CourseSection, int>
	{
		public override void Configure(EntityTypeBuilder<CourseSection> builder)
		{
			base.Configure(builder);
			builder.Property(i => i.Name).IsRequired().HasMaxLength(200);
			builder.HasMany(i => i.Contents).WithOne().HasForeignKey(i=>i.SectionId);

		}
	}
}
