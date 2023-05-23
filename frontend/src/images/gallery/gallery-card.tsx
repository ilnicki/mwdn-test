import './gallery-card.css'
import { Image } from '../image';

type Props = {
  image: Image;
};

export const GalleryCard = ({ image }: Props) => {
  return (
    <div className="gallery-card">
      <img
          className="gallery-card-image"
          src={image.url}
          alt={image.title}
        />
        <div className="gallery-card-title">
          {image.title}
        </div>
    </div>
  )
};
