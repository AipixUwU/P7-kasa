import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss';
import './styles/responsive.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error404 from './pages/404/404';
import Housing from './pages/Housing/Housing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/housing/:id" element={<Housing />} />
				<Route path="/about" element={<About />} />
				<Route path="/*" element={<Error404 />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>

);