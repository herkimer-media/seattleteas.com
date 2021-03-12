import { StoreContext, defaultStore } from "../context/store.context";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Header } from "./Header";
import React from "react";
import { Store } from "../types/store.types";
import { lightTheme } from "../utils/theme.util";

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 62.5%;
	}

	body {
		font-family: ${({ theme }): string => theme.fonts.copy};
		font-size: 1.6rem;
		margin: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: ${({ theme }): string => theme.fonts.heading};
	}
`;

interface Props {
	children: React.ReactNode;
}

interface State {
	store: Store;
}

class Layout extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			store: {
				...defaultStore,
				addToCart: async (productId, quantity) => {
					this.setState(state => ({
						store: {
							...state.store,
							addingItemToCart: true,
						},
					}));

					const { client } = this.state.store;
					const lineItemsToUpdate = [
						{ id: productId, quantity: parseInt(`${quantity}`, 10) },
					];

					await client.addLineItems(lineItemsToUpdate);
					this.setState(state => ({
						store: {
							...state.store,
							addingItemToCart: false,
						},
					}));
				},
			},
		};
	}
	render(): React.ReactNode {
		const { children } = this.props;
		const { store } = this.state;

		return (
			<StoreContext.Provider value={store}>
				<ThemeProvider theme={lightTheme}>
					<GlobalStyle />

					<Header />

					{children}
				</ThemeProvider>
			</StoreContext.Provider>
		);
	}
}

export { Layout };
