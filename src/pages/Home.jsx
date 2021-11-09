const Home = ({ setPage }) => {
	return (
		<div className="home">
			<div className="home__main">
				<div className="home__text--container">
					<h3 className="home--subheading">So, You want to travel to</h3>
					<h1 className="home--heading">Space</h1>
					<p className="home--para">
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space
						and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
						a truly out of this world experience!
					</p>
				</div>
				<button
					className="home__explore--container"
					onClick={() => setPage(1)}
					aria-expanded="false"
				>
					<h2>Explore</h2>
				</button>
			</div>
		</div>
	);
};

export default Home;
