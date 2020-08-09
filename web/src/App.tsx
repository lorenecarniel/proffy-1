import React from 'react'
import './assets/styles/global.css'
import Routes from './routes/index'
import { BrowserRouter } from 'react-router-dom'

// JSX = JavaScript + XML
function App() {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	)
}

export default App
