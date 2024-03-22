using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Edu_Infinit.Course.Core.Aggregates.Category;
using Edu_Infinite.Course.Core.Aggregates.Course;

namespace Edu_Infinite.Course.Infrastructure.Database.Config
{
	internal class CourseCategoryConfiguration : BaseConfiguration<CourseCategory, Guid>
	{
		public override void Configure(EntityTypeBuilder<CourseCategory> builder)
		{
			base.Configure(builder);
			builder.Property(i => i.Name).IsRequired().HasMaxLength(200);
			builder.HasMany(i => i.Courses).WithOne().HasForeignKey(i => i.CategoryId).IsRequired();
			builder.HasOne<CourseCategory>()
				.WithMany(i=>i.SubCategories)
				.HasForeignKey(i => i.ParentId)
				.IsRequired(false);
		}
	}
}
