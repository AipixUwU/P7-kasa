import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Housing from './pages/Housing/Housing';
import About from './pages/About/About';
import Error404 from './pages/404/404';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error404 />} />
        </Routes>
    )
}

export default AppRoutes;
