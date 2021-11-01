// import { useEffect } from 'react';

import { useEffect, useState } from 'react';

const Navbar = ({ setPage, page }) => {
	const [index, setIndex] = useState(0);

	// useEffect(() => {
	const clickHandler = (value) => {
		setPage(value);
		setIndex(value);
		const list = document.querySelectorAll('span.nav-btn');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active');
		}
		list[value].classList.add('active');
	};
	// clickHandler();
	// }, [index]);

	return (
		<div className="navbar">
			<a href="https://github.com/ashiqfury" target="_blank" rel="noreferrer">
				<div className="logo"></div>
			</a>
			<nav className="nav-container">
				<div className="bg-blur"></div>
				<ul className="nav-links">
					<li className="navlink">
						{/* <span className="nav-btn active" onClick={() => setPage(0)}> */}
						<span className="nav-btn active" onClick={() => clickHandler(0)}>
							<strong>00</strong> Home
						</span>
					</li>
					<li className="navlink">
						{/* <span className="nav-btn" onClick={() => setPage(1)}> */}
						<span className="nav-btn" onClick={() => clickHandler(1)}>
							<strong>01</strong> Destination
						</span>
					</li>
					<li className="navlink">
						<span className="nav-btn" onClick={() => clickHandler(2)}>
							<strong>02</strong> Crew
						</span>
					</li>
					<li className="navlink">
						<span className="nav-btn" onClick={() => clickHandler(3)}>
							<strong>03</strong> Technology
						</span>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
