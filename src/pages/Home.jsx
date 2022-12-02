import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from "react-router-dom"
import AppContext from '../context/AppContext';
import '@styles/Home.scss';
import Filter from '@containers/Filter'
import ProductItems from '@containers/ProductItems'

const Home = () => {
	const { token } = useParams();
	const history = useHistory();
	const { setRole } = useContext(AppContext);
	const items = [1, 2, 3, 4, 5, 6, 7, 8];

	useEffect(async () => {
		if (token) {
			console.log(token)
			let tempToken = token;
			do {
				tempToken = tempToken.replace("-", ".");
			} while (tempToken.includes("-"));
			localStorage.removeItem('token');
			localStorage.setItem('token', tempToken);
			await setRole();
			history.push('/');
		}
	}, [])
	return (
		<>
			<div className='home col-12 flex-wrap'>
				<div className='col-12 d-flex home-bg'>
					<div className="home-backdrop"></div>
				</div>
			</div>
			<Filter />
			<ProductItems />
		</>
	);
}

export default Home;
