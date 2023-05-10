import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import './styles/responsive.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<AppRoutes />
			<Footer />
		</Router>
	</React.StrictMode>,
);