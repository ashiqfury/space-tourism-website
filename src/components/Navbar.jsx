import { useEffect } from 'react';
import logo from '../assets/shared/logo.svg';

const Navbar = ({ setPage, page }) => {
	useEffect(() => {
		const list = document.querySelectorAll('span.nav-btn');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active');
		}
		list[page].classList.add('active');
	}, [page]);

	const pageHandler = (value) => {
		setPage(value);
		document.querySelector('.hamburger').classList.remove('active');
		document.body.classList.remove('active');
	};

	const hamburger = () => {
		document.querySelector('.hamburger').classList.toggle('active');
		document.body.classList.toggle('active');
	};

	return (
		<header className="navbar" role="navigation">
			<div className="logo" aria-label="homepage" onClick={() => setPage(0)}>
				<img src={logo} alt="Logo" />
			</div>
			<button
				className="hamburger mobile"
				onClick={() => hamburger()}
				aria-expanded="false"
				aria-label="navigation dropdown menu"
			>
				<div className="stick stick1"></div>
				<div className="stick stick2"></div>
				<div className="stick stick3"></div>
			</button>
			<nav className="nav-container">
				<div className="bg-blur"></div>
				<ul className="nav-links">
					<li className="navlink">
						<span className="nav-btn" onClick={() => pageHandler(0)}>
							<strong>00</strong> Home
						</span>
					</li>
					<li className="navlink">
						<span className="nav-btn" onClick={() => pageHandler(1)}>
							<strong>01</strong> Destination
						</span>
					</li>
					<li className="navlink">
						<span className="nav-btn" onClick={() => pageHandler(2)}>
							<strong>02</strong> Crew
						</span>
					</li>
					<li className="navlink">
						<span className="nav-btn" onClick={() => pageHandler(3)}>
							<strong>03</strong> Technology
						</span>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
