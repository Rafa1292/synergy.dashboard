import { useState } from "react";
import { useGet } from '../hooks/useAPI';
import swal from 'sweetalert';

const initialState = {
	auth: {
		role: '',
		sub: 0,
		user: null,
	}
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

	const resetAuthState = () => {
		setState(initialState);
	}

	return {
		setRole,
		resetAuthState
	}
}

export default useInitialState;
