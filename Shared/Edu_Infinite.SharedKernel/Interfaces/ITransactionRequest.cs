using Edu_Infinite.SharedKernel.Interfaces;
using MediatR;

namespace Edu_Infinite.SharedKernel
{
   public interface ITransactionRequest<TResult> : IRequest<TResult>
   {
   }
   public interface ITransactionRequest : IRequest
   {
   }
}