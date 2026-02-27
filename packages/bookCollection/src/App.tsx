import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { RouterProvider } from 'react-router-dom';
import { apollo_client } from './ApolloClient';
import { router } from './routes/router';
import './i18n';

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<ApolloProvider client={apollo_client}>
			<RouterProvider router={router} />
		</ApolloProvider>
	</StrictMode>,
);
