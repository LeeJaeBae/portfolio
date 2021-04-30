import { Link } from 'react-router-dom';
import styled from 'src/typed-components';
import useLogined from 'src/Hooks/useLogined';
import { useEffect } from 'react';

const Header = styled.div`
	height: 100px;
	background-color: #000;
	color: #fff;
	text-align: center;
	align-items: center;
	vertical-align: middle;
`;

const Template: React.FC<{}> = ({ children }) => {
	const [logined, _] = useLogined();

	const handleLogOut = () => {
		localStorage.removeItem('jwt');
		window.location.reload();
	};
	useEffect(() => {
		console.log(logined);
	}, [logined]);

	return (
		<>
			<Header>
				{logined ? (
					<button onClick={handleLogOut}>logout</button>
				) : (
					<Link to={'/signin'}>SignIn</Link>
				)}
			</Header>
			<div>{children}</div>
		</>
	);
};

export default Template;
