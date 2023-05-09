import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import About from './pages/About/About';
import Error404 from './pages/404/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/*" element={<Error404 />} />
				<Route path="/About" element={<About />} />
				<Route path="/About" element={<About />} />

			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>

);