import { ApolloClient, InMemoryCache } from "@apollo/client";

export const isBrowser = "undefined" !== typeof window;

export const client = isBrowser
	? new ApolloClient({
			uri: process.env.WPGRAPHQL_URL,
			cache: new InMemoryCache(),
	  })
	: null;
