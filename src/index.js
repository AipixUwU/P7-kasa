import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss';
import Footer from './components/Footer';
import Error404 from './pages/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/404" element={<Error404 />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>

);