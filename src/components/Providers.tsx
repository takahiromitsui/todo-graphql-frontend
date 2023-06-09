'use client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export function Providers({ children }: { children: React.ReactNode }) {
	const client = new ApolloClient({
		uri: 'http://127.0.0.1:5000/graphql',
		cache: new InMemoryCache(),
	});
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
