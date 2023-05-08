import Banner from "../../images/Banner.png"
function Home() {
    return (
        <div className="home">
            <div className="banner-container">
                <img className="banner" src={Banner} alt="Banner" />
                <span className="text-overlay">Chez vous, partout et ailleurs</span>
            </div>
        </div>
    )
}

export default Home