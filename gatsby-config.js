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
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: null,
				policy: [{ disallow: ["/"], userAgent: "*" }],
				sitemap: null,
			},
		},
	],
};
