using Edu_Infinite.Course.Core.Aggregates.Course;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Edu_Infinite.Course.Infrastructure.Database.Config
{
   internal class CourseCommentConfiguration : BaseConfiguration<CourseComment, Guid>
   {
      public override void Configure(EntityTypeBuilder<CourseComment> builder)
      {
         base.Configure(builder);
         builder.Property(i => i.Title).IsRequired().HasMaxLength(200);
         builder.Property(i => i.Comment).IsRequired();
         builder.HasOne<CourseDefinition>().WithMany(i => i.Comments).HasForeignKey(i => i.DefinitionId).IsRequired();

         builder.HasOne<CourseComment>()
            .WithMany(i => i.SubComments)
            .HasForeignKey(i => i.ParentId)
            .IsRequired(false);

      }
   }
}
