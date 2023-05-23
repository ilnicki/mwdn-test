import { useState } from 'react';
import './App.css';
import { ImageCarousel } from './images/carousel';
import { useImages } from './images/images.hook';
import { ImageGallery } from './images/gallery';

function App() {
  const images = useImages();
  const [displayAsCarousel, setDisplayAsCarousel] = useState(false)

  return (
    <div className={`app ${displayAsCarousel ? 'app-carousel' : 'app-gallery'}`}>
      <button className="display-button" onClick={() => setDisplayAsCarousel(!displayAsCarousel)}>Change display</button>
      {images && (
        displayAsCarousel ? <ImageCarousel images={images} /> : <ImageGallery images={images} />
      )}
    </div>
  );
}

export default App;
