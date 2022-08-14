import React, { useEffect, useContext, useState, useRef } from 'react';
import Header from '@components/Header';
import Loader from '@components/Loader';
import Footer from '@components/Footer';

const Layout = ({ children }) => {
	const [loader, setLoader] = useState(false);
	
	return (
		<div className="layout center" style={{ position: 'relative' }}>
			<Header />
			{
				loader &&
				<Loader />
				||
				children
			}
			<Footer/>
		</div>
	);
}

export default Layout;
