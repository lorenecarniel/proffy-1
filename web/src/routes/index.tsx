import React from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { AuthProvider, useAuth } from '../context/auth';

const Routes: React.FC = () => {
	const { signed } = useAuth();
	console.log(`Route index: ${signed}`);

	return <AuthProvider>{signed ? <AppRoutes /> : <AuthRoutes />}</AuthProvider>;
};

export default Routes;
