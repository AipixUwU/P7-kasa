import Logo from '../images/LOGO-1.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="banner-logo">
                <img src={Logo} alt="logo" />
            </div>
            
            <nav className="nav-list">
                <NavLink className="nav-link" to="/">Accueil</NavLink>
                <NavLink className="nav-link" to="/About">A Propos</NavLink>
            </nav>
        </header >
    )
}

export default Header