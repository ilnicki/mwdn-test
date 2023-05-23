import './image-carousel.css';
import { useState } from 'react';
import { Image } from '../image';
import { CarouselArrow } from './carousel-arrow';
import { CarouselIndicator } from './carousel-indicator';

type Props = {
  images: Image[];
};

export const ImageCarousel = ({ images }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className="carousel">
      <div className="carousel-image-row">
        <CarouselArrow variant="left" onClick={previousImage} />
        <img
          className="carousel-image"
          src={currentImage.url}
          alt={currentImage.title}
        />
        <CarouselArrow variant="right" onClick={nextImage} />
      </div>
      <CarouselIndicator
        current={currentImageIndex}
        total={images.length}
        onSelect={setCurrentImageIndex}
      />
    </div>
  );
};
