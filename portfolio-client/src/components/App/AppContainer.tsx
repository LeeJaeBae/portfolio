import { useEffect } from 'react';
import { graphql, useQuery } from 'react-apollo';
import reset from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'src/typed-components';
import { theme } from 'src/theme';
import { IS_LOGGED_IN } from './AppQueries';
import Routes from './Routes';
import gql from 'graphql-tag';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Maven+Pro');
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
      font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    &:focus, &:active {
      outline: none;
    }
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
`;

const AppContainer: any = (props: any) => {
	const query = useQuery(gql`
		query {
			GetMyProfile {
				ok
				error
				user {
					fullName
				}
			}
		}
	`);

	const [user, setUser] = useState();

	useEffect(() => {
		if (props.data.auth.isLoggedIn) {
			if (query.data && query.data.GetMyProfile?.user) {
				setUser(query.data.GetMyProfile?.user);
			}
		}
	}, [query]);

	useEffect(() => {
		user && console.log(user);
		console.log(props);
	}, [user]);

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</>
	);
};

export default graphql(IS_LOGGED_IN)(AppContainer);
