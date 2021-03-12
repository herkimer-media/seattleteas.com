require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		siteUrl: "https://www.seattleteas.com",
		title: "Seattle Teas",
	},
	plugins: [
		"gatsby-plugin-gatsby-cloud",
		{
			resolve: "gatsby-plugin-styled-components",
			options: {
				displayName: "development" === process.env.NODE_ENV,
			},
		},
		{
			resolve: "gatsby-source-wordpress",
			options: {
				schema: {
					previewRequestConcurrency: 2,
					requestConcurrency: 5,
				},
				url: process.env.WPGRAPHQL_URL,
			},
		},
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				env: {
					development: {
						host: null,
						policy: [{ disallow: ["/"], userAgent: "*" }],
						sitemap: null,
					},
					production: {
						policy: [{ allow: "/", userAgent: "*" }],
					},
				},
				host: "https://www.seattleteas.com",
				sitemap: "https://www.seattleteas.com/sitemap.xml",
			},
		},
		"gatsby-plugin-sitemap",
	],
};
