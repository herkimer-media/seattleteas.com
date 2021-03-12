import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		fonts: {
			copy: string;
			heading: string;
		};
	}
}
