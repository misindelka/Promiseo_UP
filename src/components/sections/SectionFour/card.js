import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { AiOutlineLine } from 'react-icons/ai';
import './card.css';

export const Card = ({ data }) => {
	return (
		<div className="card-container">
			<img src={data.img} alt="img" className="card-img" />
			<BsPlus className="plus-icon" size="25" />
			<p className="card-label">{data.title}</p>
			<div className="card-date">
				<AiOutlineLine size="20" /> {data.date}
			</div>
		</div>
	);
};
