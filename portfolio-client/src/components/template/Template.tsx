import styled from 'src/typed-components';

type props = {};

const Header = styled.div`
	height: 100px;
`;

const Template: React.FC<props> = ({ children }) => {
	return (
		<>
			<Header>test</Header>
			<div>{children}</div>
		</>
	);
};

export default Template;
