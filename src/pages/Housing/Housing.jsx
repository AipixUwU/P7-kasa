import { useParams } from "react-router-dom";
import data from "../../data/logements.json"
import Tag from "./Tag"
import Rating from "./Rating"
import Carrousel from "./Carrousel";
import Collapse from "../../components/Collapse";

function Housing() {
    let { id } = useParams();
    const housing = data.find(house => house.id === id);

    return (
        <div className="housing-container">

            <Carrousel images={housing.pictures} alt={housing.description} />
            <section className="housing-info">
                <div className="housing-detail">
                    <p className="house-title"> {housing.title} </p>
                    <p className="housing-location "> {housing.location} </p>
                    <div className="housing-tags">
                        {housing.tags.map(tag =>
                            <Tag key={tag} tag={tag} />
                        )}
                    </div>
                </div>

                <div className="housing-profile">
                    <div className="housing-rating">
                        <span className="profile-name"> {housing.host.name} </span>
                        <img className="profile-picture" src={housing.host.picture} alt={housing.host.name} />
                    </div>
                    <Rating rating={housing.rating} />
                </div>
            </section>
            <div className="housing-collapse">
                <Collapse title="Description"><p>{housing.description}</p></Collapse>
                <Collapse title="Équipements"><ul>{housing.equipments.map(equipment => <li key={equipment}>{equipment}</li>)}</ul></Collapse>
            </div>
        </div>

    )
}

export default Housing;