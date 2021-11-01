import Destination from './pages/Destination';
import Technology from './pages/Technology';
import Crew from './pages/Crew';
import Home from './pages/Home';
import './scss/style.scss';
import { useState } from 'react';

const App = () => {
	const [page, setPage] = useState(0);
	return (
		<div>
			{page === 0 && <Home setPage={setPage} page={page} />}
			{page === 1 && <Destination setPage={setPage} page={page} />}
			{page === 2 && <Crew setPage={setPage} page={page} />}
			{page === 3 && <Technology setPage={setPage} page={page} />}
		</div>
	);
};

export default App;
