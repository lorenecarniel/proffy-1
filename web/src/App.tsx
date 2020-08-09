import React from 'react';
import AuthRoutes from './routes/auth.routes';
import AppRoutes from './routes/app.routes';
import './assets/styles/global.css';
import { useAuth, AuthProvider } from './context/auth';

// JSX = JavaScript + XML
function App() {
	const { signed } = useAuth();

	return <AuthProvider>{signed ? <AppRoutes /> : <AuthRoutes />}</AuthProvider>;
}

export default App;
