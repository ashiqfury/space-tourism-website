import data from '../data';
import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';
import { useEffect, useState } from 'react';

const images = [moon, mars, europa, titan];

const Destination = ({ setPage }) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const list = document.querySelectorAll('li.planet-link');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active');
			i === index && list[i].classList.add('active');
		}
	}, [index]);

	return (
		<div className="destination">
			<div className="planet-wrapper">
				<h1 className="planet-header-text">
					<span>01</span> Pick your destination
				</h1>
				<div className="planet-container">
					<div className="planet-img-wrapper">
						<img src={images[index]} alt={data.destinations[index].name} />
					</div>
					<div className="planet-text-wrapper">
						<ul className="planet-links">
							<li className="planet-link active" onClick={() => setIndex(0)}>
								Moon
							</li>
							<li className="planet-link" onClick={() => setIndex(1)}>
								Mars
							</li>
							<li className="planet-link" onClick={() => setIndex(2)}>
								Europa
							</li>
							<li className="planet-link" onClick={() => setIndex(3)}>
								Titan
							</li>
						</ul>
						<h2 className="planet--name">{data.destinations[index].name}</h2>
						<p className="planet--description">{data.destinations[index].description}</p>
						<div className="planet--divider"></div>
						<ul className="planet--stats-container">
							<li className="planet--stats">
								<p className="heading">Avg. Distance</p>
								<h4 className="value">{data.destinations[index].distance}</h4>
							</li>
							<li className="planet--stats">
								<p className="heading">Est. Travel Time</p>
								<h4 className="value">{data.destinations[index].travel}</h4>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
