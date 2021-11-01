import Navbar from '../components/Navbar';

const Home = ({ setPage }) => {
	return (
		<div className="home">
			<Navbar setPage={setPage} />

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
				<a href="https://github.com/ashiqfury" target="_blank" rel="noreferrer">
					<div className="home__explore--container">
						<h2>Explore</h2>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Home;
