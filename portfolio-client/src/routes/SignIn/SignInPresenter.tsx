import { Ref } from 'react';
import { styled } from 'src/theme';

type Props = {
	handleSignIn: any;
	id: Ref<any>;
	password: Ref<any>;
};

const SignInPresenter: React.FC<Props> = ({ handleSignIn, id, password }) => (
	<>
		<Container>
			<InputBox>
				<Input type='text' placeholder='E-mail address' ref={id} />
			</InputBox>
			<InputBox>
				<Input type='password' placeholder='password' ref={password} />
			</InputBox>
			<InputBox>
				<Submit onClick={handleSignIn}>Sign In</Submit>
			</InputBox>
		</Container>
	</>
);

export default SignInPresenter;

const Container = styled.div`
	text-align: center;
	position: relative;
	display: inline-block;
	width: 100%;
`;

const InputBox = styled.div`
	display: block;
	position: relative;
	width: 20rem;
	height: 2rem;
	left: calc(50% - 10rem);
	margin-top: 0.3rem;
`;

const Input = styled.input`
	width: 18rem;
	height: 2rem;
	font-size: 1rem;
	text-align: center;
	border-radius: 0.3rem;
`;
const Submit = styled.button`
	width: 18rem;
	height: 2rem;
	font-size: 1rem;
	text-align: center;
	border-radius: 0.3rem;
`;
