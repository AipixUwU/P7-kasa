import { useState } from 'react'


function Carrousel({ images, alt }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentImageIndex((currentIndex) => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));
    }

    const goToPreviousImage = () => {
        setCurrentImageIndex((currentIndex) => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
    }


    return (
        <div className="carrousel">
            <img src={images[currentImageIndex]} alt={alt} />
            <div className="carrousel-controls">
            <i class="fa-solid fa-chevron-left previousImage" onClick={goToPreviousImage}></i>
                {/* <button className="previousImage" onClick={goToPreviousImage}>Précédent</button> */}
                {/* <button className="nextImage" onClick={goToNextImage}>Suivant</button> */}
                <i class="fa-solid fa-chevron-right nextImage" onClick={goToNextImage}></i>
            </div>
        </div>
    )
}

export default Carrousel;