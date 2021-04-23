import { gql } from 'apollo-boost';

export const IS_LOGGED_IN = gql`
	mutation {
		EmailSignIn(email: "nea4182@gmail.com", password: "123123") {
			ok
			error
			token
		}
	}
`;
