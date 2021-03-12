import { DefaultTheme } from "styled-components";

const baseTheme = {};

export const lightTheme: DefaultTheme = {
	...baseTheme,
	fonts: {
		copy: '"Jost", sans-serif',
		heading: '"Libre Baskerville", serif',
	},
};
