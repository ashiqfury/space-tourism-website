import { useEffect } from 'react';
import { useLocation } from 'react-router';

const Navbar = () => {
	const location = useLocation();

	useEffect(() => {
		let path = location.pathname.split('/');
		path = path[path.length - 1];
		const element = document.getElementById(`${path}`);
		element.classList.add('active');
	}, [location.pathname]);

	return (
		<div className="navbar">
			<div className="logo"></div>
			<nav className="nav-container">
				<div className="bg-blur"></div>
				<ul className="nav-links">
					<li className="navlink">
						<a href="/" id="home">
							<strong>00</strong> Home
						</a>
					</li>
					<li className="navlink">
						<a href="/destination" id="destination">
							<strong>01</strong> Destination
						</a>
					</li>
					<li className="navlink">
						<a href="/crew" id="crew">
							<strong>02</strong> Crew
						</a>
					</li>
					<li className="navlink">
						<a href="/technology" id="technology">
							<strong>03</strong> Technology
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
