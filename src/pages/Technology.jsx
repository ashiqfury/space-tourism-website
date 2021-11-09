import { useEffect, useState } from 'react';
import data from '../data';
import image1 from '../assets/technology/image-launch-vehicle-portrait.jpg';
import image2 from '../assets/technology/image-spaceport-portrait.jpg';
import image3 from '../assets/technology/image-space-capsule-portrait.jpg';
// landscape images also available.

const images = [image1, image2, image3];

const Technology = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const list = document.querySelectorAll('li.tech-link');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active');
			i === index && list[i].classList.add('active');
		}
	}, [index]);

	return (
		<div className="technology">
			<div className="tech-wrapper">
				<h1 className="tech-header-text">
					<span>03</span> Space Launch 101
				</h1>
				<div className="tech-container">
					<div className="tech-text-wrapper">
						<ul className="tech-links">
							<li className="tech-link active" onClick={() => setIndex(0)}>
								1
							</li>
							<li className="tech-link" onClick={() => setIndex(1)}>
								2
							</li>
							<li className="tech-link" onClick={() => setIndex(2)}>
								3
							</li>
						</ul>
						<div className="tech-texts">
							<h2 className="tech-subheading">The technology ...</h2>
							<h1 className="tech-heading">{data.technology[index].name}</h1>
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
