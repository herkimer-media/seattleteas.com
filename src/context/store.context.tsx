import { Client } from "../utils/store.util";
import React from "react";
import { Store } from "../types/store.types";

export const defaultStore: Store = {
	addingItemToCart: false,
	addToCart: (): void => console.warn("No add to cart function is set"),
	client: new Client(),
};

const StoreContext = React.createContext<Store>(defaultStore);

export { StoreContext };
