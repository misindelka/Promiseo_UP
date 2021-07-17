import * as React from 'react';
import { Link } from 'react-router-dom';
import { linkItems } from '../../LinkItems';
import { answers } from '../../Answers';
import './SectionTwo.css';

export const SectionTwo = () => {
	const [activeAnswer, setActiveAnswer] = React.useState(1);

	return (
		<div className="wrapper-two">
			<h1 className="heading"> Lorem Ipsum is not simply</h1>
			<div className="content">
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
					Latin words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature, discovered the
					undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
					1.10.33 of "de Finibus Bonorum from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature, discovered the
					undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
					1.10.33 of "de Finibus Bonorums
				</p>
			</div>
			<h1 className="heading"> Lorem Ipsum comes from ?</h1>
			<div className="dots-wrapper">
				{linkItems.map(({ id }) => (
					<Link
						key={id}
						to="#"
						className={`link-dot ${activeAnswer === id && 'link-dot_active'}`}
						onClick={() => setActiveAnswer(id)}>
						{`${id}`}
					</Link>
				))}
			</div>

			<div className="answer">
				{answers.map(
					({ answer, id }) => id === activeAnswer && <p key={id}>{answer}</p>
				)}
			</div>
		</div>
	);
};
