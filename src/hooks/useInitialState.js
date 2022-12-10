import React, { useState, useEffect } from "react";
import { useGet } from '../hooks/useAPI';
import swal from 'sweetalert';

const initialState = {
	auth: {
		role: '',
		sub: 0,
		user: null,
	},
	products: []
}





const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const setRole = async () => {
		try {
			const response = await useGet('users/get-role', {});
			if (!response.error) {
				setState({
					...state,
					customerId: response.content.customerId,
					auth: {
						user: response.content.user,
						role: response.content.role,
						sub: response.content.sub,
						phone: parseInt(response.content.phone)
					}
				})
			}

		} catch (error) {
			localStorage.removeItem('token');
		}
	}

	const setProducts = async (products) => {
		await setState({
			...state,
			products: products
		})
	}

	const getProduct = async (id) => {
		const product = state?.products?.find(x => x.id == id);
		return product;
	}

	const resetAuthState = () => {
		setState(initialState);
	}

	return {
		setRole,
		resetAuthState,
		setProducts,
		getProduct,
		state
	}
}

export default useInitialState;
