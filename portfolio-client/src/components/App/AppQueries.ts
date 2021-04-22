import gql from 'graphql-tag';

export const IS_LOGGEN_IN = gql`
	{
		autn {
			isLoggenIn @client
		}
	}
`;
