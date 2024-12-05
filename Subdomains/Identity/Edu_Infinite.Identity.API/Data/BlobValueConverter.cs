using Edu_Infinite.SharedKernel.ValueObjects;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Edu_Infinite.Identity.API.Data
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
