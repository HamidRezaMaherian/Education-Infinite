using Edu_Infinit.Course.Core.Aggregates.Category;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.Course.Infrastructure.Database.ValueGenerators;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Edu_Infinite.Course.Infrastructure.Database.Config
{
   internal class CourseDefinitionConfiguration : BaseConfiguration<CourseDefinition, Guid>
   {
      public override void Configure(EntityTypeBuilder<CourseDefinition> builder)
      {
         base.Configure(builder);
         builder.Property(i => i.Name).IsRequired().HasMaxLength(200);
         builder.Property(i => i.FullPrice).HasPrecision(3).IsRequired();
         builder.HasOne(i=>i.Category).WithMany(i => i.Courses).HasForeignKey(i => i.CategoryId).IsRequired();
         builder.Property(i => i.CreatedDateTime).IsRequired();
         builder.Property(i => i.Description).IsRequired();
         builder.Property(i => i.ShortDescription).HasMaxLength(500).IsRequired();
         builder.Property(i => i.Level).IsRequired();
         builder.Property(i => i.MainImage)
                .HasConversion<BlobValueConverter>()
                .IsRequired();
         builder.Property(i => i.IntroVideo)
                .HasConversion<BlobValueConverter>()
                .IsRequired(false);
      }
   }
}
