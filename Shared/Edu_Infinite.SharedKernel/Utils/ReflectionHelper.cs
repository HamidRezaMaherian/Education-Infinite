using System.Collections.Immutable;

namespace Edu_Infinite.SharedKernel.Utils
{
	public static class ReflectionHelper
	{
		public static IEnumerable<Type> GetImplementorsOf<T>(this IEnumerable<Type> types)
		{
			return types.Where(type => typeof(T).IsAssignableFrom(type) && !type.IsInterface && !type.IsAbstract).ToImmutableArray();
		}
		public static IEnumerable<Type> GetImplementorsOf(this IEnumerable<Type> types,Type t)
		{
			return types.Where(type => t.IsAssignableFrom(type) && !type.IsInterface && !type.IsAbstract).ToImmutableArray();
		}
	}
}
