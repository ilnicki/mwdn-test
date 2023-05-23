import './image-gallery.css'
import { Image } from '../image';
import { GalleryCard } from './gallery-card';

type Props = {
  images: Image[];
};

export const ImageGallery = ({ images }: Props) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <GalleryCard image={image} key={`${image.albumId}-${image.id}`} />
      ))}
    </div>
  );
};
