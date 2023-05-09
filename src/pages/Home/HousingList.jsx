import HousingItem from "./HousingItem";

function HousingList({ housings }) {
    return (
        <div className="housing-list">
            {housings.map(housing => {
                return (
                    <HousingItem key={housing.id} cover={housing.cover} title={housing.title} description={housing.description} id={housing.id} />
                )
            })}
        </div>
    )
}

export default HousingList;