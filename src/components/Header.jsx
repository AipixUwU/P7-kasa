import Logo from '../images/LOGO-1.png'
import '../styles/App.css'

function Header() {
    return (
        <header>
            <div className="banner-logo">
                <img src={Logo} alt="logo" />
            </div>

            <ul className="nav-list">
                <li>Accueil</li>
                <li>A propos</li>
            </ul>
        </header >
    )
}

export default Header