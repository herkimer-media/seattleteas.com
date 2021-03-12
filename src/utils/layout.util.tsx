import { ApolloProvider } from "@apollo/client";
import { Layout } from "../components/Layout";
import React from "react";
import { client } from "../context/apollo.context";

interface Props {
	element: React.ReactNode;
}

export const wrapPageElement = ({ element }: Props): React.ReactElement => (
	<Layout>{element}</Layout>
);

export const wrapRootElement = ({
	element,
}: Props): React.ReactElement | null => {
	if (null === client) return null;
	return <ApolloProvider client={client}>{element}</ApolloProvider>;
};
