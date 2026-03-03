import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import { apollo_client } from './ApolloClient';

import './i18n';
import { BookCollectionLayout } from './Entry';

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<ApolloProvider client={apollo_client}>
			<BookCollectionLayout />
		</ApolloProvider>
	</StrictMode>,
);
