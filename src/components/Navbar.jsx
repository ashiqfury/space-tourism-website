const Navbar = ({ setPage }) => {
	return (
		<div className="navbar">
			<a href="https://github.com/ashiqfury" target="_blank" rel="noreferrer">
				<div className="logo"></div>
			</a>
			<nav className="nav-container">
				<div className="bg-blur"></div>
				<ul className="nav-links">
					<li className="navlink">
						<span className="nav-btn" onClick={() => setPage(1)}>
							<strong>00</strong> Home
						</span>
					</li>
					<li className="navlink">
						<span className="nav-btn" onClick={() => setPage(2)}>
							<strong>01</strong> Destination
						</span>
					</li>
					<li className="navlink">
						<span className="nav-btn" onClick={() => setPage(3)}>
							<strong>02</strong> Crew
						</span>
					</li>
					<li className="navlink">
						<span className="nav-btn" onClick={() => setPage(4)}>
							<strong>03</strong> Technology
						</span>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
