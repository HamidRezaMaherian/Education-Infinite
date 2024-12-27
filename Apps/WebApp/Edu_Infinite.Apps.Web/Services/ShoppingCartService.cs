namespace Edu_Infinite.Apps.Web.Services
{
	using Blazored.LocalStorage;
	using Edu_Infinite.Apps.Web.Models;
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using System.Security.Cryptography;
	using System.Text;
	using System.Text.Json;
	using Fluxor;
	using Edu_Infinite.Apps.Web.States;
	using Microsoft.JSInterop;

	public class ShoppingCartService
	{
		private readonly ILocalStorageService _localStorage;
		private const string CartKey = "shoppingCart";
		//private const string EncryptionKey = "your-encryption-key";
		private readonly IJSRuntime _jsRuntime;
		private readonly IDispatcher _dispatcher;
		private readonly IState<ShoppingCartState> shoppingCartState;

		public ShoppingCartService(ILocalStorageService localStorage, IJSRuntime jsRuntime, 
			//IDispatcher dispatcher,
			IState<ShoppingCartState> shoppingCartState)
		{
			_localStorage = localStorage;
			_jsRuntime = jsRuntime;
			//_dispatcher = dispatcher;
			this.shoppingCartState = shoppingCartState;
		}
		public ShoppingCartState StateValue => shoppingCartState.Value;

		public async Task<List<ShoppingCartItem>> GetCartItemsAsync()
		{
			var jsonData = await _localStorage.GetItemAsync<string>(CartKey);
			if (jsonData == null) return new List<ShoppingCartItem>();

			//var jsonData = await DecryptAsync(encryptedData, EncryptionKey);
			var cartWithHash = JsonSerializer.Deserialize<ShoppingCartWithHash>(jsonData);

			if (cartWithHash != null && VerifyHash(cartWithHash.Items, cartWithHash.Hash))
			{
				return cartWithHash.Items;
			}

			return new List<ShoppingCartItem>(); // return empty list if hash doesn't match
		}

		public async Task AddItemToCartAsync(ShoppingCartItem item)
		{
			var cart = await GetCartItemsWithHashAsync();
			cart.Items.Add(item);
			cart.Hash = GenerateHash(cart.Items);
			var jsonData = JsonSerializer.Serialize(cart);
			//var encryptedData = await EncryptAsync(jsonData);
			await _localStorage.SetItemAsync(CartKey, jsonData).AsTask();
			_dispatcher.Dispatch(() => new AddCartItemAction(item));
		}

		public async Task RemoveItemFromCartAsync(string itemId)
		{
			var cart = await GetCartItemsWithHashAsync();
			cart.Items.RemoveAll(i => i.Id == itemId);
			cart.Hash = GenerateHash(cart.Items);
			var jsonData = JsonSerializer.Serialize(cart);
			//var encryptedData = await EncryptAsync(jsonData);
			await _localStorage.SetItemAsync(CartKey, jsonData);
			_dispatcher.Dispatch(() => new RemoveCartItemAction(itemId));
		}

		private async Task<ShoppingCartWithHash> GetCartItemsWithHashAsync()
		{
			var jsonData = await _localStorage.GetItemAsync<string>(CartKey);
			if (jsonData == null) return new ShoppingCartWithHash { Items = new List<ShoppingCartItem>(), Hash = string.Empty };

			//var jsonData = await DecryptAsync(encryptedData, EncryptionKey);
			return JsonSerializer.Deserialize<ShoppingCartWithHash>(jsonData) ?? new ShoppingCartWithHash { Items = new List<ShoppingCartItem>(), Hash = string.Empty };
		}

		private string GenerateHash(List<ShoppingCartItem> items)
		{
			using (var sha256 = SHA256.Create())
			{
				var json = JsonSerializer.Serialize(items);
				var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(json));
				return Convert.ToBase64String(bytes);
			}
		}

		private bool VerifyHash(List<ShoppingCartItem> items, string hash)
		{
			var generatedHash = GenerateHash(items);
			return generatedHash == hash;
		}
		[Obsolete]
		private async Task<string> EncryptAsync(string plainText)
		{
			var key = await _jsRuntime.InvokeAsync<string>("generateKey");
			var result = await _jsRuntime.InvokeAsync<string>("encryptData", plainText, key);
			return result;
		}
		[Obsolete]
		private async Task<string> DecryptAsync(string cipherText, string key)
		{
			var decryptedData = await _jsRuntime.InvokeAsync<string>("decryptData", cipherText, key);
			return decryptedData;
		}
	}

	internal class ShoppingCartWithHash
	{
		public List<ShoppingCartItem> Items { get; set; }
		public string Hash { get; set; }
	}
}
