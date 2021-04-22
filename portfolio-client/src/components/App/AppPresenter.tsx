import React from 'react';

type AppPresenterProp = {
	isLoggedIn: boolean;
};

const AppPresenter: React.FunctionComponent<AppPresenterProp> = ({ isLoggedIn }) => {
	return <span>{isLoggedIn ? 'in' : 'out'}</span>;
};

export default AppPresenter;
