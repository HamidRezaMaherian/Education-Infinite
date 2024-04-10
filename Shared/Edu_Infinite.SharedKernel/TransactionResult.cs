using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Edu_Infinite.SharedKernel
{
   public class TransactionResult<T> where T : BaseEntity
   {
      public T Model { get; set; }
      public bool IsSuccessfull { get; set; }
   }
}
