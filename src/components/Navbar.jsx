const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo"></div>
			<nav className="nav-container">
				<div className="bg-blur"></div>
				<ul className="nav-links">
					<li className="navlink">
						<a href="/">
							<strong>00</strong>Home
						</a>
					</li>
					<li className="navlink">
						<a href="/destination">
							<strong>01</strong>Destination
						</a>
					</li>
					<li className="navlink">
						<a href="/crew">
							<strong>02</strong>Crew
						</a>
					</li>
					<li className="navlink">
						<a href="/technology">
							<strong>03</strong>Technology
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
