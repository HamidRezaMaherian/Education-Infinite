using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Edu_Infinite.Api.Shared.Dtos.Order
{
   public class AddOrderItemDto
   {
      public string OrderId { get; set; }
      public string ItemId { get; set; }
   }
}
