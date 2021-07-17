import * as React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ReactComponent as Logo } from '../../assets/promiseo-logo.svg';
import { linkItems } from '../LinkItems';
import './Navbar.css';

export const Navbar = () => {
	const [click, setClick] = React.useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<div className="navbar">
			<Logo title="promiseo-logo" width="160px" />
			<div className="menu-icon" onClick={handleClick}>
				{click ? <FaTimes /> : <FaBars />}
			</div>
			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
				{linkItems.map(({ id, url }) => (
					<Link
						key={id}
						to={url}
						className="nav-link"
						onClick={closeMobileMenu}>
						Item <p className="nav-number">{id}</p>
					</Link>
				))}
			</ul>
		</div>
	);
};
