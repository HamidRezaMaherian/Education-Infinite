using Edu_Infinite.SharedKernel.ValueObjects;
using FluentValidation;
using FluentValidation.Validators;
using System;
using System.Buffers.Text;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Edu_Infinite.Api.Shared.Utils
{
   public static class ValidationExtensions
   {
      public static IRuleBuilderOptions<T, string> UrlOrBase64<T>(this IRuleBuilder<T, string> ruleBuilder)
         => ruleBuilder.Must((i, p) => IsUrlOrBase64(p)).WithMessage("the value must be either a valid url or base64 string");

      private static bool IsUrlOrBase64(string value)
      {
         try
         {
            new Blob(value);
            return true;
         }
         catch (Exception)
         {
            return Base64.IsValid(value);
         }
      }
   }
}
