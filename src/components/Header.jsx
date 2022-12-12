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
			<header className="navbar justify-content-start align-items-center navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">

				<Link className="navbar-brand col-md-3 col-lg-1 me-0 px-3 fs-6 bg-dark" to="/">
					<img className='mx-3 ' height={45} src={logo} />
				</Link>
				<button
					className="navbar-toggler position-absolute d-md-none collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#sidebarMenu"
					aria-controls="sidebarMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<input
					className="form-control form-control-dark m-2 border-0"
					type="text"
					placeholder="Buscar"
					aria-label="Buscar"
				/>
				<div className="navbar-nav d-none d-md-flex ms-auto">
					<div className="nav-item text-nowrap">
						<Link className="nav-link px-3" to='/login'>
							Cerrar sesión
						</Link>
					</div>
				</div>
			</header>

		</>
	);
}

export default Header;
