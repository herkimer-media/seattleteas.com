import React from "react";
import { StoreContext } from "../context/store.context";
import { WpVariableProduct } from "../types/wordpress.types";
import { graphql } from "gatsby";

interface Props {
	data: {
		product: WpVariableProduct;
	};
}

class ProductTemplate extends React.Component<Props> {
	render(): React.ReactNode {
		const { product } = this.props.data;

		return (
			<StoreContext.Consumer>
				{context => (
					<>
						{product.name && <h1>{product.name}</h1>}
						<button
							onClick={() => context.addToCart(product.id || "testId", 1)}
						>
							Add to cart
						</button>
					</>
				)}
			</StoreContext.Consumer>
		);
	}
}

export default ProductTemplate;

export const query = graphql`
	query ProductTemplateQuery($id: String!) {
		product: wpProduct(id: { eq: $id }) {
			name
		}
	}
`;
