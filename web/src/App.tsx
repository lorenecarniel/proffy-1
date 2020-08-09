import React from 'react';
import Routes from './routes/auth.routes';
import './assets/styles/global.css';
import { AuthProvider } from './context/auth';

// JSX = JavaScript + XML
function App() {
	return (
		<AuthProvider>
			<Routes />
		</AuthProvider>
	);
}

export default App;
