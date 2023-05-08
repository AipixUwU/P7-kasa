import Logo from '../images/LOGO-1.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="banner-logo">
                <img src={Logo} alt="logo" />
            </div>

            <nav className="nav-list">
                <Link className="nav-link" to="/">Accueil</Link>
                <Link className="nav-link" to="/About">A Propos</Link>
            </nav>
        </header >
    )
}

export default Header