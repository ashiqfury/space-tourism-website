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
				<Route path="/" exact>
					<Redirect to="/home" />
				</Route>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/destination">
					<Destination />
				</Route>
				<Route path="/crew">
					<Crew />
				</Route>
				<Route path="/technology">
					<Technology />
				</Route>

				{/* Github hosting routes */}
				<Route path="/space-tourism-website">
					<Redirect to="/space-tourism-website/home" />
				</Route>
				<Route path="/space-tourism-website/home">
					<Home />
				</Route>
				<Route path="/space-tourism-website/destination">
					<Destination />
				</Route>
				<Route path="/space-tourism-website/crew">
					<Crew />
				</Route>
				<Route path="/space-tourism-website/technology">
					<Technology />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
