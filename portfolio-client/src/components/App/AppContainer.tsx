import React from 'react';
import { graphql } from 'react-apollo';
import reset from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'src/typed-components';
import { theme } from 'src/theme';
import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQueries';

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
	console.log(props);
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<AppPresenter isLoggedIn={props.data.auth.isLoggedIn} />
			</ThemeProvider>
		</>
	);
};

export default graphql(IS_LOGGED_IN)(AppContainer);
