import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import data from '../data';
import image1 from '../assets/technology/image-launch-vehicle-portrait.jpg';
import image2 from '../assets/technology/image-spaceport-portrait.jpg';
import image3 from '../assets/technology/image-space-capsule-portrait.jpg';

const images = [image1, image2, image3];

const Technology = ({ setPage }) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const list = document.querySelectorAll('div.tech-link');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active');
			i === index && list[i].classList.add('active');
		}
	}, [index]);

	return (
		<div className="technology">
			<Navbar setPage={setPage} />
			<div className="tech-wrapper">
				<h5 className="tech-header-text">
					<span>01</span> Pick your destination
				</h5>
				<div className="tech-container">
					<div className="tech-text-wrapper">
						<div className="tech-links">
							<div className="tech-link active" onClick={() => setIndex(0)}>
								1
							</div>
							<div className="tech-link" onClick={() => setIndex(1)}>
								2
							</div>
							<div className="tech-link" onClick={() => setIndex(2)}>
								3
							</div>
						</div>
						<div className="tech-texts">
							<h5 className="tech-subheading">The technology ...</h5>
							<h2 className="tech-heading">{data.technology[index].name}</h2>
							<p className="tech-description">{data.technology[index].description}</p>
						</div>
					</div>
					<div className="tech-img-wrapper">
						<img src={images[index]} alt="Images" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technology;
