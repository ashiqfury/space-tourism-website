import Destination from './pages/Destination';
import Technology from './pages/Technology';
import Crew from './pages/Crew';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './scss/style.scss';
import { useState } from 'react';

const App = () => {
	const [page, setPage] = useState(0);
	return (
		<div>
			<Navbar setPage={setPage} page={page} />
			{page === 0 && <Home />}
			{page === 1 && <Destination />}
			{page === 2 && <Crew />}
			{page === 3 && <Technology />}
		</div>
	);
};

export default App;
