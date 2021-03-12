import { Client } from "../utils/store.util";

export interface LineItem {
	id: string;
	quantity: number;
}

export interface Store {
	addingItemToCart: boolean;
	addToCart: (productId: string, quantity: number) => void;
	client: Client;
}
