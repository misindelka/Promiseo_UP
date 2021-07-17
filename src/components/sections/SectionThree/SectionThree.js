import * as React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { articles } from '../../Articles';
import './SectionThree.css';

export const SectionThree = () => (
	<div className="wrapper-three">
		<div className="wrap-left">
			<div className="link-article">
				<h1 className="heading-three">Lorem Ipsum</h1>
			</div>

			{articles.map(({ title, url, icon, id }) => (
				<Link key={id} className="link-article" to={`${url}`}>
					<div className="wrap-icon">
						<img src={icon} alt="icon" className="icon" />
					</div>
					<div>
						<p className="link-title">{title}</p>
						<div className="read-more">
							<p>Read more</p> <BsArrowRight size="20" />
						</div>
					</div>
				</Link>
			))}
		</div>
		<div className="wrap-right">
			<h1 className="wrap-right-text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit
			</h1>
		</div>
	</div>
);
