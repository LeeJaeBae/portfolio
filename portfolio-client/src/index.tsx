import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './appollo';

ReactDOM.render(
	<ApolloProvider client={apolloClient}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
