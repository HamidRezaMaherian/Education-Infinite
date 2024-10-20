using Edu_Infinite.SharedKernel.Interfaces;
using MediatR;

namespace Edu_Infinite.SharedKernel
{
   public interface ITransactionRequest<TResult> : IRequest<TransactionResult<TResult>> where TResult : BaseEntity
   {
   }
   public interface ITransactionRequest : IRequest
   {
   }
}