import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import React from "react";

const GlobalStyle = createGlobalStyle`
	html {
		height: 100%;
	}

	body {
		background-color: #111;
		color: #fff;
		display: flex;
		flex-direction: column;
		font-family: "Jost", sans-serif;
		height: 100%;
    justify-content: center;
		margin: 0;
	}

  h1 {
    line-height: 1;
	  margin: 1em 0 0.5em;
  }

  p {
	  font-size: 1.2em;
    line-height: 1.666;
  }

	h1,
	p {
		margin-left: auto;
		margin-right: auto;
		max-width: 700px;
		padding: 0 3.2rem;
		text-align: center;
	}
`;

class IndexPage extends React.Component {
	render(): React.ReactNode {
		return (
			<>
				<Helmet>
					<title>Seattle Teas</title>
				</Helmet>

				<GlobalStyle />

				<h1>
					<svg
						aria-label={"Seattle Teas"}
						height={"34"}
						viewBox={"0 0 301 34"}
						width={"301"}
						xmlns={"http://www.w3.org/2000/svg"}
					>
						<title>Seattle Teas</title>
						<path
							d={"M12.34 29.35c7.076 0 13.165-1.69 13.165-7.173 0-4.655-5.037-5.579-12.592-6.185-6.376-.51-8.83-1.211-8.83-3.283 0-2.614 5.291-3.156 9.754-3.156 3.73 0 7.205.446 10.17 1.69l.765-2.806C21.775 7.13 17.79 6.716 13.869 6.716 5.963 6.716.672 8.628.672 12.932c0 4.431 4.463 5.547 12.082 6.184 6.503.542 9.404 1.148 9.404 3.475 0 2.965-4.431 3.921-9.819 3.921-3.953 0-7.97-.605-10.998-1.944l-.797 2.837c3.57 1.498 7.81 1.944 11.795 1.944zm40.931-.574v-2.87H33.156v-7.618H53.27v-2.806H33.156v-5.324H53.27V7.29H29.872v21.487h23.4zm6.918 0l3.029-4.878H79.89l2.997 4.878h4.08L73.037 6.939h-2.87l-13.93 21.837h3.952zm17.948-7.715H64.97l6.599-10.616 6.567 10.616zM92.1 22.134V3.517h12.464V.648H76.32v2.87h12.496v18.616H92.1zm14.186 11.524V15.041h12.464v-2.869H90.506v2.87h12.496v18.616h3.284zm39.55-4.882v-2.87h-20.051V7.29H122.5v21.487h23.336zm27.066 0v-2.87h-20.116v-7.618h20.116v-2.806h-20.116v-5.324h20.116V7.29h-23.4v21.487h23.4zm27.447 0V10.158h12.465V7.29h-28.245v2.87h12.497v18.617h3.283zm39.083 0v-2.87h-20.115v-7.618h20.115v-2.806h-20.115v-5.324h20.115V7.29h-23.398v21.487h23.398zm6.918 0l3.029-4.878h16.672l2.997 4.878h4.08l-13.93-21.837h-2.87l-13.93 21.837h3.952zm17.948-7.715h-13.166l6.599-10.616 6.567 10.616zm23.08 8.288c7.077 0 13.166-1.69 13.166-7.172 0-4.655-5.037-5.579-12.592-6.185-6.376-.51-8.83-1.211-8.83-3.283 0-2.614 5.291-3.156 9.754-3.156 3.73 0 7.205.446 10.17 1.69l.765-2.806c-2.997-1.307-6.982-1.721-10.903-1.721-7.906 0-13.198 1.912-13.198 6.216 0 4.431 4.463 5.547 12.083 6.184 6.503.542 9.404 1.148 9.404 3.475 0 2.965-4.431 3.921-9.819 3.921-3.953 0-7.97-.605-10.998-1.944l-.797 2.837c3.57 1.498 7.81 1.944 11.795 1.944z"}
							fill={"#ffffff"}
							fillRule={"nonzero"}
						/>
					</svg>
				</h1>

				<p>
					We are eagerly preparing for our upcoming launch. Thank you for your patience.
				</p>
			</>
		);
	}
}

export default IndexPage;
