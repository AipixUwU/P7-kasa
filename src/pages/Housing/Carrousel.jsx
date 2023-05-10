import { useState } from 'react'


function Carrousel({ images, alt }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const lastImageIndex = images.length - 1;

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
                <i className="fa-solid fa-chevron-left previousImage" onClick={goToPreviousImage}></i>
                <i className="fa-solid fa-chevron-right nextImage" onClick={goToNextImage}></i>
                <span className='image-counter'>{currentImageIndex +1}/{lastImageIndex +1}</span>
            </div>
        </div>
    )
}

export default Carrousel;