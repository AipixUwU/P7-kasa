import Bannerimg from "../../images/Banner.png"
import Banner from "../../components/Banner";
import HousingList from "./HousingList";
import data from "../../data/logements.json"

function Home() {
    return (
        <>
            <Banner url={Bannerimg} title="Chez vous, partout et ailleurs" />
            <section className="house-container">
                <HousingList housings={data} />
            </section>
        </>
    )
}

export default Home