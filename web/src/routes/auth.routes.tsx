import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import SignIn from '../pages/SignIn';

function Routes() {
	return (
		<BrowserRouter>
			<Route exact path='/' component={Login} />
			<Route path='/forgotPassword' component={ForgotPassword} />
			<Route path='/signIn' component={SignIn} />
		</BrowserRouter>
	);
}

export default Routes;
