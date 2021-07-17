import * as React from 'react';
import { BsDot } from 'react-icons/bs';
import { BiMouse } from 'react-icons/bi';
import './SectionOne.css';

const senteces = [
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint deleniti fugiat magni possimus.',
	'Array tenetur laboriosam molestias officiis magnam, aperiam nulla esse animi facilis neque minus consequuntur',
	'Mollitia doloribus, natus voluptas similique voluptate nihil quidem iste aperiam eum eligendi enim nulla .',
	'Id qui, saepe quasi totam sed velit, at eius cum numquam reprehenderit hic voluptate, possimus eligendi .',
];

export const SectionOne = () => {
	const [current, setCurrent] = React.useState(1);
	const length = senteces.length;

	const nextSlide = React.useCallback(() => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	}, [current, length]);

	React.useEffect(() => {
		const handleAutoplay = setInterval(nextSlide, 3000);
		return () => clearInterval(handleAutoplay);
	}, [nextSlide]);

	if (!Array.isArray(senteces) || senteces.length <= 0) {
		return null;
	}

	return (
		<div className="wrapper-one">
			<div className="content-wrapper">
				{senteces.map((item, index) => {
					return (
						<div
							key={index}
							className={index === current ? 'slide active' : 'slide'}>
							{index === current && <p className="text-primary">{item}</p>}
						</div>
					);
				})}
				<div className="button-wrapper">
					<button className="button-primary">CALL TO ACTION</button>
					<button className="button-secondary">read more</button>
				</div>
				<BiMouse size="30" className="bi-mouse" />
			</div>
			<div className="slider-container">
				{senteces.map((item, index) => (
					<div key={index} onClick={() => setCurrent(index)}>
						<BsDot color={index === current ? 'brown' : 'white'} size="20" />
					</div>
				))}
			</div>
		</div>
	);
};
