import { useEffect, useState } from 'react';
import { Image } from './image';
import axios from 'axios';


export const useImages = (): Image[] | null => {
  const [images, setImages] = useState<Image[] | null>(null);

  useEffect(() => {
    axios.get('http://localhost:3000/images').then(({data}) => setImages(data));
  }, [setImages]);

  return images;
}
