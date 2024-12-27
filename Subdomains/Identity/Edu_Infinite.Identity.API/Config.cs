using Duende.IdentityServer;
using Duende.IdentityServer.Models;
using IdentityModel;

namespace IdentityServerAspNetIdentity;

public static class Config
{
	public static IEnumerable<IdentityResource> IdentityResources =>
		 [
			  new IdentityResources.OpenId(),
				new IdentityResources.Profile(),
				new IdentityResource()
				{
					 Name = "verification",
					 UserClaims =
					 [
						  JwtClaimTypes.Email,
						  JwtClaimTypes.EmailVerified
					 ]
				},
		  ];

	public static IEnumerable<ApiScope> ApiScopes =>
		 [
			  new ApiScope(name: "api.course.read", displayName: "My API"),
				new ApiScope(name: "api.course.write", displayName: "My API")
		 ];

	public static IEnumerable<Client> Clients =>
		 [
			  new Client
				{
					 ClientId = "admin_web",

					 ClientSecrets = { new Secret("secret".Sha256()) },
					 AllowedGrantTypes = GrantTypes.Code,
                
                // where to redirect to after login
                RedirectUris = { "https://localhost:44323/signin-oidc" },
					 AllowAccessTokensViaBrowser = true,
					 AllowedCorsOrigins ={ "https://localhost:44323" },
                // where to redirect to after logout
                PostLogoutRedirectUris = { "https://localhost:44323/signout-callback-oidc" },

					 AllowOfflineAccess = true,

					 AllowedScopes =
					 [
						  IdentityServerConstants.StandardScopes.OpenId,
						  IdentityServerConstants.StandardScopes.Profile,
						  IdentityServerConstants.StandardScopes.OfflineAccess,
						  "api.course.read",
						  "api.course.write",
					 ]
				},
				new Client
				{
					 ClientId = "client_web_host",
					 ClientSecrets = { new Secret("secret".Sha256()) },

					 AllowedGrantTypes = GrantTypes.Code,
                
                // where to redirect to after login
                RedirectUris = { "https://localhost:44333/signin-oidc","https://localhost:7068/signin-oidc" },
					 AllowAccessTokensViaBrowser = true,
					 AllowedCorsOrigins ={ "https://localhost:44333","https://localhost:7068" },
                // where to redirect to after logout
                PostLogoutRedirectUris = { "https://localhost:44333/signout-callback-oidc","https://localhost:7068/signout-callback-oidc" },

					 AllowOfflineAccess = true,

					 AllowedScopes =
					 [
						  IdentityServerConstants.StandardScopes.OpenId,
						  IdentityServerConstants.StandardScopes.Profile,
						  IdentityServerConstants.StandardScopes.OfflineAccess,
						  "api.course.read",
					 ]
				}
		 ];
}