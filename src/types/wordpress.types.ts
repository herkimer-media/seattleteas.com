export type WpStatus = "publish";

export type WpNodeType = "VariableProduct";

interface WpArray<T> {
	nodes: Array<T>;
}

interface WpLocalAttribute {
	attributeId?: string;
	id?: string;
	label?: string;
	name?: string;
	options?: Array<String>;
	position?: number;
	variation?: boolean;
	visible?: boolean;
}

export interface WpProductCategory {
	count?: number;
}

export interface WpProductTag {
	id?: string;
}

export interface WpProductReview {
	id?: string;
}

export interface WpProductShippingClass {
	id?: string;
}

interface WpProductReviews<T> extends WpArray<T> {
	averageRating?: number;
}

export interface WpProduct {
	averageRating?: number;
	databaseId?: number;
	date?: string;
	dateOnSaleFrom?: string;
	dateOnSaleTo?: string;
	description?: string;
	featured?: boolean;
	id?: string;
	localAttributes?: WpArray<WpLocalAttribute>;
	menuOrder?: number;
	modified?: string;
	name?: string;
	nodeType?: WpNodeType;
	onSale?: boolean;
	productCategories?: WpArray<WpProductCategory>;
	productTags?: WpArray<WpProductTag>;
	purchasable?: boolean;
	purchaseNote?: string;
	reviewCount?: number;
	reviews?: WpProductReviews<WpProductReview>;
	reviewsAllowed?: boolean;
	shippingClasses?: WpArray<WpProductShippingClass>;
	shortDescription?: string;
	sku?: string;
	slug?: string;
	status?: WpStatus;
	totalSales?: number;
}

interface WpProductVariationAttribute {
	attributeId?: number;
	id?: string;
	label?: string;
	name?: string;
	value?: string;
}

export interface WpProductVariation {
	attributes?: WpArray<WpProductVariationAttribute>;
	price?: string;
}

export interface WpVariableProduct extends WpProduct {
	price?: string;
	regularPrice?: string;
	salePrice?: string;
	shippingRequired?: boolean;
	variations?: {
		nodes: Array<WpProductVariation>;
	};
}
