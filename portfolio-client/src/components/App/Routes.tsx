import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from 'src/routes/Home';
import Template from '../template/Template';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Template>
					<Route exact path='/'>
						<Home />
					</Route>
				</Template>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
