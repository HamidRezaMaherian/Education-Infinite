using System.Linq.Expressions;

namespace Edu_Infinite.Apps.Admin.Common.Models
{
   public class ListViewModel
   {
      public ListViewModel(ICollection<object> rows)
      {
         Rows = rows;
         Columns = new Dictionary<string, string>();
      }
      public ListViewModel(ICollection<object> rows, ICollection<KeyValuePair<string, string>> keyValuePairs)
      {
         Rows = rows;
         Columns = new Dictionary<string, string>(keyValuePairs);
      }
      public Dictionary<string, string> Columns { get; private set; }
      public ICollection<object> Rows { get; private set; }
      public void AddColumn(string property, string name)
      {
         Columns.Add(property, name);
      }
   }
}
