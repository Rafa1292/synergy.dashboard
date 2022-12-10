import React, { useState } from 'react';
import '@styles/Header.scss';
import logo from '@logos/logo.png';
import menu from '@icons/menu.png';
import close from '@icons/close.png';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

const Header = () => {
	const [openMenuClass, setOpenMenu] = useState('');

	const OpenMenu = () => {
		console.log(openMenuClass)
		if (openMenuClass === '') {
			setOpenMenu('header-nav-open');
		}
		else {
			setOpenMenu('');
		}
	}

	return (
		<>
			<div className="d-flex bg-dark header">
				<div className="header-logo">
					<Link to="/">
						<img className='' src={logo} />
					</Link>
				</div>
				<div className="header-menu p-4" style={{cursor: 'pointer'}} onClick={() => OpenMenu()}>
					<img height={openMenuClass === "" ? 40 : 30} src={openMenuClass === "" ? menu : close}  />
				</div>
			</div>
			<Navbar menuState={openMenuClass}/>
		</>
	);
}

export default Header;
