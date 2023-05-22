import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Image } from './entities/image.entity';

interface ImageSource {
  albumId: number;
  id: number;
  title: string;
  path: string;
}

interface PhotoSource {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable()
export class ImagesSourceService {
  private client = axios.create({
    baseURL: 'https://my-json-server.typicode.com/icedrone/json-demo-server',
  });

  async getImages(): Promise<Image[]> {
    const { data: images } = await this.client.get<ImageSource[][]>('/images');

    return images.flat().map(({ albumId, id, title, path }) => ({
      albumId,
      id,
      title,
      url: path,
    }));
  }

  async getPhotos(): Promise<Image[]> {
    const { data: photos } = await this.client.get<PhotoSource[][]>('/photos');

    return photos.flat().map(({ albumId, id, title, url }) => ({
      albumId,
      id,
      title,
      url,
    }));
  }
}
