using Edu_Infinite.Course.Core.Aggregates.Course;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Edu_Infinite.Course.Infrastructure.Database.Config
{
   internal class CourseRateConfiguration : BaseConfiguration<CourseRate, Guid>
   {
      public override void Configure(EntityTypeBuilder<CourseRate> builder)
      {
         base.Configure(builder);
         builder.Property(i => i.Rate).IsRequired();
         builder.HasOne<CourseDefinition>().WithMany(i => i.Rates).HasForeignKey(i => i.DefinitionId).IsRequired();
      }
   }
}
