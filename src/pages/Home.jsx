const Home = ({ setPage }) => {
	return (
		<main className="home">
			<section className="home__main">
				<article className="home__text--container">
					<h2 className="home--subheading">So, You want to travel to</h2>
					<h1 className="home--heading">Space</h1>
					<p className="home--para">
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space
						and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
						a truly out of this world experience!
					</p>
				</article>
				<button
					className="home__explore--container"
					onClick={() => setPage(1)}
					aria-expanded="false"
				>
					<span>Explore</span>
				</button>
			</section>
		</main>
	);
};

export default Home;

// https://github.com/ashiqfury
