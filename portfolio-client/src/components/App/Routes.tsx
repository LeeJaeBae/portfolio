import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from 'src/routes/Home';
import { SignIn } from 'src/routes/SignIn';
import Template from '../template/Template';

const Routes = () => {
	return (
		<BrowserRouter>
			<Template>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/signin'>
						<SignIn />
					</Route>
				</Switch>
			</Template>
		</BrowserRouter>
	);
};

export default Routes;
