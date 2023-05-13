import Logo from '../images/LOGO.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <img className="logo" src={Logo} alt="logo" />
                <p className="text-center">© 2023 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;