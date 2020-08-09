import React from 'react';
import './assets/styles/global.css';
import Routes from './routes/index';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth';

// JSX = JavaScript + XML
function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
