import React from 'react';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import { BrowserRouter, Route } from 'react-router-dom';
import NotificationEmail from '../pages/NotificationEmail';
import CreateAccount from '../pages/CreateAccount';

const AuthRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Route exact path='/' component={Login} />
			<Route path='/createAccount' component={CreateAccount} />
			<Route path='/forgotPassword' component={ForgotPassword} />
			<Route path='/notificationEmail' component={NotificationEmail} />
		</BrowserRouter>
	);
};

export default AuthRoutes;
