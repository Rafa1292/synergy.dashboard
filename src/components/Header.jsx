import React, { useState } from 'react';
import '@styles/Header.scss';
import logo from '@logos/logo.png';
import menu from '@icons/dotMenu.png';
import Navbar from './Navbar';
const Header = () => {
	const [openMenuClass, setOpenMenu] = useState('');
	const [dotMenuClass, setDotMenuClass] = useState('');

	const OpenMenu = ()=> {
		if (openMenuClass === '') {
			setOpenMenu('header-nav-open');
		}
		else{
			setOpenMenu('');
		}
	}

	return (
		<>
			<div className="col-10 flex-wrap header">
				<div className="header-logo">
					<img className='' src={logo} />
				</div>
				<div className={`header-nav ${openMenuClass}`}>
					<Navbar />
				</div>
				<div className="header-menu">
					<img className={`${dotMenuClass}`} src={menu} onClick={()=>OpenMenu()}/>
				</div>
			</div>
		</>
	);
}

export default Header;
