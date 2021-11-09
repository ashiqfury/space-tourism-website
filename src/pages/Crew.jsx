import { useEffect, useState } from 'react';
import data from '../data';
import person1 from '../assets/crew/image-douglas-hurley.png';
import person2 from '../assets/crew/image-mark-shuttleworth.png';
import person3 from '../assets/crew/image-victor-glover.png';
import person4 from '../assets/crew/image-anousheh-ansari.png';

const persons = [person1, person2, person3, person4];

const Crew = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const list = document.querySelectorAll('li.crew-link');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active');
			i === index && list[i].classList.add('active');
		}
	}, [index]);

	return (
		<div className="crew">
			<main className="crew-wrapper">
				<h1 className="crew-header-text">
					<span>02</span> Meet your crew
				</h1>
				<div className="crew-container">
					<section className="crew-text-wrapper">
						<h3 className="crew--role">{data.crew[index].role}</h3>
						<h2 className="crew--name">{data.crew[index].name}</h2>
						<p className="crew--description">{data.crew[index].bio}</p>
						<ul className="crew-links">
							<li className="crew-link active" onClick={() => setIndex(0)}></li>
							<li className="crew-link" onClick={() => setIndex(1)}></li>
							<li className="crew-link" onClick={() => setIndex(2)}></li>
							<li className="crew-link" onClick={() => setIndex(3)}></li>
						</ul>
					</section>
					<section className="crew-img-wrapper">
						<img src={persons[index]} alt="Person" />
					</section>
				</div>
			</main>
		</div>
	);
};

export default Crew;

// https://github.com/ashiqfury
