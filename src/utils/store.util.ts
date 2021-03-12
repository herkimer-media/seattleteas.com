import { LineItem } from "../types/store.types";

const STORAGE_IDS = {
	LineItems: "lineItems",
};

class Client {
	lineItems: Array<LineItem>;

	constructor() {
		const existingLineItems = JSON.parse(
			localStorage.getItem(STORAGE_IDS.LineItems) || "[]"
		);
		this.lineItems = Array.isArray(existingLineItems) ? existingLineItems : [];
	}

	addLineItems(newItems: Array<LineItem>): void {
		newItems.forEach(newItem => {
			const i = this.lineItems.findIndex(item => newItem.id === item.id);
			if (i >= 0) {
				this.lineItems[i].quantity += newItem.quantity;
			} else {
				this.lineItems.push(newItem);
			}
		});
		localStorage.setItem(STORAGE_IDS.LineItems, JSON.stringify(this.lineItems));
	}
}

export { Client };
