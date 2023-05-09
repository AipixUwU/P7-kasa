import { Link } from 'react-router-dom';

function HousingItem({ title, cover, id, description }) {
    return (
        <Link to={`housing/${id}`} className="housing-item">
            <img src={cover} alt={description} />
            <p>{title}</p>
        </Link>
    )
}

export default HousingItem;