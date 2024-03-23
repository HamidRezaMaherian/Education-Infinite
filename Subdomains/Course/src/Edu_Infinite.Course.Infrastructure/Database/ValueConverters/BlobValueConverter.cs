using Edu_Infinite.SharedKernel.ValueObjects;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Edu_Infinite.Course.Infrastructure.Database.ValueGenerators
{
   internal class BlobValueConverter : ValueConverter<Blob, string>
   {
      public BlobValueConverter()
    : base(
        blob => blob.ToString(),
        str => new Blob(str))
      {
      }
   }
}
