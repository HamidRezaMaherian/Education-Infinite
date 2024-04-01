using System.Linq.Expressions;
using System.Xml.Linq;

namespace Edu_Infinite.Apps.Admin.Common.Models
{
   public class ListViewModel<T> where T : class
   {
      public ListViewModel(ICollection<T> rows)
      {
         Rows = rows;
         Columns = new Dictionary<string, string>();
      }
      public ListViewModel(ICollection<T> rows, ICollection<KeyValuePair<string, string>> keyValuePairs)
      {
         Rows = rows;
         Columns = new Dictionary<string, string>(keyValuePairs);
      }
      public Dictionary<string, string> Columns { get; private set; }
      public ICollection<T> Rows { get; private set; }
      public void AddColumn<TProp>(Expression<Func<T, TProp>> prop, string name)
      {
         Columns.Add(prop.Name!, name);
      }
      public void AddColumn(string prop, string name)
      {
         Columns.Add(prop, name);
      }
   }
}
