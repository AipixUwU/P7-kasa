import { useParams } from "react-router-dom";
import data from "../../data/logements.json"
import Tag from "./Tag"
import Rating from "./Rating"

function Housing() {
    let { id } = useParams();
    const housing = data.find(house => house.id === id);

    return (
        <div>
            <section className="housing-info">
                <div className="housing-detail">
                    <h2 className="house-title"> {housing.title} </h2>
                    <p className="housing-location "> {housing.location} </p>
                    {housing.tags.map(tag =>
                        <Tag key={tag} tag={tag} />
                    )}
                </div>

                <div className="housing-profile">
                    <span className="profile-name"> {housing.host.name} </span>
                    <img className="profile-picture" src={housing.host.picture} alt={housing.host.name} />
                    <Rating rating={housing.rating} />
                </div>

                
            </section>
        </div>

    )
}

export default Housing;