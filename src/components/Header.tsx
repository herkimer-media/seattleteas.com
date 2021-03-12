import React from "react";
import styled from "styled-components";

const Wrapper = styled("header")`
	box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
	position: sticky;
	top: 0;
`;

class Header extends React.Component {
	render(): React.ReactNode {
		return (
			<Wrapper>
				header
			</Wrapper>
		);
	}
}

export { Header };
