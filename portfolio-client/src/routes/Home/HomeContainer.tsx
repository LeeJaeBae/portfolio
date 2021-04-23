import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';
import { useEffect } from 'react';

const QUERY = gql`
	mutation EmailSignIn($email: String!, $password: String!) {
		EmailSignIn(email: $email, password: $password) {
			ok
			token
		}
	}
`;

const HomeContainer: React.FC<any> = (props) => {
	const [test, { data }] = useMutation(QUERY);

	useEffect(() => {
		test({ variables: { email: 'nea4182@gmail.com', password: '123123' } });
	}, []);
	useEffect(() => {
		console.log(data);
	}, [data]);
	return <></>;
};

export default HomeContainer;
