import { Link } from 'react-router-dom'

function Error404() {
    return (
        <div className="error">
            <span className="error404">404</span>
            <span className="error-text">Oups! La page que vous demandez n'existe pas.</span>
            <Link className="home-link" to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error404;