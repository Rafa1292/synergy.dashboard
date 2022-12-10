import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import Register from '@pages/Register';
import NewPassword from '@pages/NewPassword';
import SendEmail from '@pages/SendEmail';
import PrivacyPolicy from '@pages/PrivacyPolicy';
import TermsAndConditions from '@pages/TermsAndConditions';
import Agents from '@pages/Agents';
import DeleteMyData from '@pages/DeleteMyData';
import NotFound from '@pages/NotFound';
import Product from '@pages/Product';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '@styles/global.css';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/login" component={Login} />
						<Route exact path="/privacy-policy" component={PrivacyPolicy} />
						<Route exact path="/agents" component={Agents} />
						<Route exact path="/terms-and-conditions" component={TermsAndConditions} />
						<Route exact path="/delete-my-data" component={DeleteMyData} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/password-recovery" component={PasswordRecovery} />
						<Route exact path="/new-password/:token" component={NewPassword} />						
						<Route exact path="/product/:id" component={Product} />						
						<Route exact path="/send-email" component={SendEmail} />						
						<Route exact path="/:token?" component={Home} />
						<Route path="*" component={NotFound} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
