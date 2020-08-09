import React from 'react'
import Login from '../pages/Login'
import SignIn from '../pages/SignIn'
import ForgotPassword from '../pages/ForgotPassword'
import { BrowserRouter, Route } from 'react-router-dom'

const AuthRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Route exact path='/' component={Login} />
			<Route path='/signIn' component={SignIn} />
			<Route path='/forgotPassword' component={ForgotPassword} />
		</BrowserRouter>
	)
}

export default AuthRoutes
