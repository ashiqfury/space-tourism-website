import Destination from './pages/Destination';
import Technology from './pages/Technology';
import Crew from './pages/Crew';
import Home from './pages/Home';
import './scss/style.scss';
import { useState } from 'react';

const App = () => {
	const [page, setPage] = useState(1);
	return (
		<div>
			{page === 1 && <Home setPage={setPage} />}
			{page === 2 && <Destination setPage={setPage} />}
			{page === 3 && <Crew setPage={setPage} />}
			{page === 4 && <Technology setPage={setPage} />}
		</div>
	);
};

export default App;
