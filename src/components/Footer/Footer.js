import * as React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/promiseo-logo.svg';
import { linkItems } from '../LinkItems';
import { contacts } from '../Contacts';
import './Footer.css';

export const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<Logo title="promiseo-logo" width="120px" />
				<div className="footer-nav">
					{linkItems.map((item) => (
						<Link key={item.id} to={item.url} className="footer-nav-links">
							ITEM <p className="item-number">{item.id}</p>
						</Link>
					))}
				</div>
				<div className="foot-icons-container">
					<p className="foot-icon">f</p>
					<p className="foot-icon">t</p>
				</div>
			</div>
			<div className="footer-lower-container">
				<div className="footer-lower-left">
					<p className="footer-left-text">COPYRIGHT TEXT</p>
				</div>
				<div className="footer-lower-right">
					{contacts.map(({ id, icon, title }) => (
						<div key={id} className="footer-right-container">
							<img src={icon} alt="icon" className="footer-lower-icon" />
							<p>{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
