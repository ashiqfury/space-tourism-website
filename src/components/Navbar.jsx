import { useEffect } from 'react';

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
	};

	const hamburger = () => {
		document.querySelector('.hamburger').classList.toggle('active');
		document.body.classList.toggle('active');
	};

	return (
		<div className="navbar">
			<a href="https://github.com/ashiqfury" target="_blank" rel="noreferrer">
				<div className="logo"></div>
			</a>
			<div className="hamburger mobile" onClick={() => hamburger()}>
				<div className="stick stick1"></div>
				<div className="stick stick2"></div>
				<div className="stick stick3"></div>
			</div>
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
		</div>
	);
};

export default Navbar;
