namespace Edu_Infinite.SharedKernel.ValueObjects
{
   public class Blob : ValueObject
   {
      public Uri Uri { get; private set; }
      public string Name { get; private set; }
      public string Length { get; private set; }
      public string Size { get; private set; }
      public Blob(string fullUrl)
      {
         Uri=new Uri(fullUrl);
         Name = Path.GetFileName(Uri.ToString());
      }
      protected override IEnumerable<object> GetEqualityComponents()
      {
         yield return Uri.Host;
         yield return Uri.AbsolutePath;
         yield return Name;
      }
      public override string ToString()
      {
         return Uri.ToString();
      }
   }
}
