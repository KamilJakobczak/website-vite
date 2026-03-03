import { ApolloProvider } from '@apollo/client';
import { apollo_client } from './ApolloClient';
import './i18n';
import BookCollection from './main';

export function BookCollectionLayout() {
	return (
		<ApolloProvider client={apollo_client}>
			<BookCollection />
		</ApolloProvider>
	);
}
