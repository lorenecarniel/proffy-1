import React from 'react';
import AuthRoutes from './routes/auth.routes';
import AppRoutes from './routes/app.routes';
import './assets/styles/global.css';
import { useAuth, AuthProvider } from './context/auth';
import { BrowserRouter } from 'react-router-dom';

// JSX = JavaScript + XML
function App() {
	const { signed } = useAuth();

	return (
		<BrowserRouter>
			<AuthProvider>{signed ? <AppRoutes /> : <AuthRoutes />}</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
