exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;

	const result = await graphql(`
		{
			site {
				siteMetadata {
					siteUrl
					title
				}
			}

			products: allWpProduct {
				edges {
					node {
						id
					}
				}
			}
		}
	`);

	// Create product pages
	await Promise.all(result.data.products.edges.map(({ node }) => {
		const { id } = node;
		const slug = "/product";

		createPage({
			component: require.resolve("./src/templates/product.tsx"),
			context: {
				id,
			},
			path: slug,
		});
	}));
};
