function Banner({url, title}) {
    return (
        <div className="banner-container">
            <img className="bg-img" src={url} alt="banner"/>
            <span className="text-overlay">{title}</span>
        </div>
    )
}

export default Banner;