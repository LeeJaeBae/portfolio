import { InputHTMLAttributes } from 'react';
import { useRef } from 'react';
import SignInPresenter from './SignInPresenter';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router';
import useLogined from 'src/Hooks/useLogined';
import { useEffect } from 'react';
const QUERY = gql`
	mutation EmailSignIn($email: String!, $password: String!) {
		EmailSignIn(email: $email, password: $password) {
			ok
			token
		}
	}
`;

const SignInContainer: React.FC<any> = (props) => {
	const [mutationSignIn, { data }] = useMutation(QUERY);

	const id = useRef<InputHTMLAttributes<string>>();
	const password = useRef<InputHTMLAttributes<string>>();
	const history = useHistory();
	const [login] = useLogined();
	const handleSignin = () => {
		mutationSignIn({
			variables: { email: id.current?.value, password: password.current?.value },
		}).then((v) => {
			const { EmailSignIn: result } = v.data;
			localStorage.setItem('jwt', result.token);
			window.location.reload();
			// console.log(v);
		});
	};

	useEffect(() => {
		if (login) {
			history.push('/');
		}
	}, []);

	return <SignInPresenter handleSignIn={handleSignin} id={id} password={password} />;
};

export default SignInContainer;
