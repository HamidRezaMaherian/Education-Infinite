namespace Edu_Infinite.Apps.Web.States
{
	using Edu_Infinite.Apps.Web.Models;
	using Edu_Infinite.Apps.Web.Services;
	using Fluxor;

	public record AddCartItemAction(ShoppingCartItem shoppingCartItem);

	public record RemoveCartItemAction(string shoppingItemId);

	public class ShoppingCartState
	{
		public List<ShoppingCartItem> Items { get; set; } = new List<ShoppingCartItem>();
	}

	public static class ShoppingCartReducers
	{
		[ReducerMethod]
		public static ShoppingCartState ReduceAddItemAction(ShoppingCartState state, AddCartItemAction addItem)
		{
			return new ShoppingCartState
			{
				Items = state.Items.Concat([addItem.shoppingCartItem]).ToList()
			};
		}

		[ReducerMethod]
		public static ShoppingCartState ReduceRemoveItemAction(ShoppingCartState state, RemoveCartItemAction removeItem)
		{
			return new ShoppingCartState
			{
				Items = state.Items.Where(i => i.Id != removeItem.shoppingItemId).ToList()
			};
		}
	}
	public class ShoppingCartFeature : Feature<ShoppingCartState>
	{
		private readonly ShoppingCartService shoppingCartService;

		public ShoppingCartFeature(ShoppingCartService shoppingCartService)
		{
			this.shoppingCartService = shoppingCartService;
		}
		public override string GetName()
		{
			return "ShoppingCart";
		}

		protected override ShoppingCartState GetInitialState()
		{
			//var res = shoppingCartService.GetInitialCartItemsAsync().Result;
			return new ShoppingCartState
			{
				Items = []
			};
		}
	}

}
