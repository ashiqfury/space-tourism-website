import Navbar from '../components/Navbar';
import data from '../data';
import moon from '../assets/destination/image-moon.png';

const Destination = () => {
	console.log(data.destinations[0].images.png);
	return (
		<div className="destination">
			<Navbar />
			<div className="planet-wrapper">
				<h5 className="planet-header-text">
					<span>01</span> Pick your destination
				</h5>
				<div className="planet-container">
					<div className="planet-img-wrapper">
						<img src={moon} alt="Planets" />
					</div>
					<div className="planet-text-wrapper">
						<ul className="planet-links">
							<li className="planet-link">Moon</li>
							<li className="planet-link">Mars</li>
							<li className="planet-link">Europa</li>
							<li className="planet-link">Titan</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
