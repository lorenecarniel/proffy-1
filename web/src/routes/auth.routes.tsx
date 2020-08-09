import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';

function AuthRoutes() {
	return (
		<>
			<Route exact path='/' component={Login} />
			<Route path='/forgotPassword' component={ForgotPassword} />
			<Route path='/signIn' component={SignIn} />
		</>
	);
}

export default AuthRoutes;
