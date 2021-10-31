import Destination from './pages/Destination';
import Technology from './pages/Technology';
import Crew from './pages/Crew';
import Home from './pages/Home';
import './scss/style.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/home" exact>
					<Home />
				</Route>
				<Route path="/destination" exact>
					<Destination />
				</Route>
				<Route path="/crew" exact>
					<Crew />
				</Route>
				<Route path="/technology" exact>
					<Technology />
				</Route>

				{/* Github hosting routes */}
				<Route path="/" exact>
					<Redirect to="/space-tourism-website/home" />
				</Route>
				<Route path="/space-tourism-website" exact>
					<Redirect to="/space-tourism-website/home" />
				</Route>
				<Route path="/space-tourism-website/home" exact>
					<Home />
				</Route>
				<Route path="/space-tourism-website/destination" exact>
					<Destination />
				</Route>
				<Route path="/space-tourism-website/crew" exact>
					<Crew />
				</Route>
				<Route path="/space-tourism-website/technology" exact>
					<Technology />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
