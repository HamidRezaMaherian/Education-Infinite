using Duende.IdentityServer.Events;
using Duende.IdentityServer;
using Duende.IdentityServer.Models;
using Duende.IdentityServer.Services;
using Duende.IdentityServer.Stores;
using Edu_Infinite.Identity.API.Models;
using Edu_Infinite.SharedKernel.ValueObjects;
using IdentityServerAspNetIdentity.Pages;
using IdentityServerAspNetIdentity.Pages.Login;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.VisualBasic;

namespace Edu_Infinite.Identity.API.Pages.Account.Signup
{
	[SecurityHeaders]
	[AllowAnonymous]
	public class IndexModel : PageModel
	{
		private readonly UserManager<ApplicationUser> _userManager;
		private readonly SignInManager<ApplicationUser> _signInManager;
		private readonly IIdentityServerInteractionService _interaction;
		private readonly IAuthenticationSchemeProvider _schemeProvider;
		private readonly IIdentityProviderStore _identityProviderStore;
		private readonly IEventService _events;

		public ViewModel View { get; set; } = default!;

		public IndexModel(
		 IIdentityServerInteractionService interaction,
		 IAuthenticationSchemeProvider schemeProvider,
		 IIdentityProviderStore identityProviderStore,
		 IEventService events,
		 UserManager<ApplicationUser> userManager,
		 SignInManager<ApplicationUser> signInManager)
		{
			_userManager = userManager;
			_signInManager = signInManager;
			_interaction = interaction;
			_schemeProvider = schemeProvider;
			_identityProviderStore = identityProviderStore;
			_events = events;
		}

		[BindProperty]
		public InputModel Input { get; set; } = default!;

		public async Task<IActionResult> OnGet(string? returnUrl)
		{
			await BuildModelAsync(returnUrl);

			if (View.IsExternalLoginOnly)
			{
				// we only have one option for logging in and it's an external provider
				return RedirectToPage("/ExternalLogin/Challenge", new { scheme = View.ExternalLoginScheme, returnUrl });
			}

			return Page();
		}

		public async Task<IActionResult> OnPostAsync()
		{
			// check if we are in the context of an authorization request
			var context = await _interaction.GetAuthorizationContextAsync(Input.ReturnUrl);

			if (ModelState.IsValid)
			{
				var user = new ApplicationUser
				{
					UserName = Input.Username,
					Email = Input.Email,
					Avatar = new Blob(Input.AvatarUrl)
				};

				var result = await _userManager.CreateAsync(user, Input.Password);
				if (result.Succeeded)
				{
					await _signInManager.SignInAsync(user, isPersistent: false);
					if (context != null)
					{
						// This "can't happen", because if the ReturnUrl was null, then the context would be null
						ArgumentNullException.ThrowIfNull(Input.ReturnUrl, nameof(Input.ReturnUrl));

						if (context.IsNativeClient())
						{
							// The client is native, so this change in how to
							// return the response is for better UX for the end user.
							return this.LoadingPage(Input.ReturnUrl);
						}

						// we can trust model.ReturnUrl since GetAuthorizationContextAsync returned non-null
						return Redirect(Input.ReturnUrl ?? "~/");
					}

					// request for a local page
					if (Url.IsLocalUrl(Input.ReturnUrl))
					{
						return Redirect(Input.ReturnUrl);
					}
					else if (string.IsNullOrEmpty(Input.ReturnUrl))
					{
						return Redirect("~/");
					}
					else
					{
						// user might have clicked on a malicious link - should be logged
						throw new ArgumentException("invalid return URL");
					}
				}

				foreach (var error in result.Errors)
				{
					ModelState.AddModelError(string.Empty, error.Description);
				}
			}
			// something went wrong, show form with error
			await BuildModelAsync(Input.ReturnUrl);
			return Page();
		}
		private async Task BuildModelAsync(string? returnUrl)
		{
			Input = new InputModel
			{
				ReturnUrl = returnUrl
			};

			var context = await _interaction.GetAuthorizationContextAsync(returnUrl);
			if (context?.IdP != null && await _schemeProvider.GetSchemeAsync(context.IdP) != null)
			{
				var local = context.IdP == Duende.IdentityServer.IdentityServerConstants.LocalIdentityProvider;

				// this is meant to short circuit the UI and only trigger the one external IdP
				View = new ViewModel
				{
					EnableLocalLogin = local,
				};

				Input.Username = context.LoginHint;

				if (!local)
				{
					View.ExternalProviders = new[] { new ViewModel.ExternalProvider(authenticationScheme: context.IdP) };
				}

				return;
			}

			var schemes = await _schemeProvider.GetAllSchemesAsync();

			var providers = schemes
				 .Where(x => x.DisplayName != null)
				 .Select(x => new ViewModel.ExternalProvider
				 (
				 authenticationScheme: x.Name,
					  displayName: x.DisplayName ?? x.Name
				 )).ToList();

			var dynamicSchemes = (await _identityProviderStore.GetAllSchemeNamesAsync())
				 .Where(x => x.Enabled)
				 .Select(x => new ViewModel.ExternalProvider
				 (
					  authenticationScheme: x.Scheme,
					  displayName: x.DisplayName ?? x.Scheme
				 ));
			providers.AddRange(dynamicSchemes);


			var allowLocal = true;
			var client = context?.Client;
			if (client != null)
			{
				allowLocal = client.EnableLocalLogin;
				if (client.IdentityProviderRestrictions != null && client.IdentityProviderRestrictions.Count != 0)
				{
					providers = providers.Where(provider => client.IdentityProviderRestrictions.Contains(provider.AuthenticationScheme)).ToList();
				}
			}

			View = new ViewModel
			{
				AllowRememberLogin = LoginOptions.AllowRememberLogin,
				EnableLocalLogin = allowLocal && LoginOptions.AllowLocalLogin,
				ExternalProviders = providers.ToArray()
			};
		}


		public class InputModel
		{
			public string Username { get; set; } = default!;
			public string Email { get; set; } = default!;
			public string AvatarUrl { get; set; } = default!;
			public string Password { get; set; } = default!;
			public string ConfirmPassword { get; set; } = default!;
			public string? ReturnUrl { get; set; }

		}
	}
}
