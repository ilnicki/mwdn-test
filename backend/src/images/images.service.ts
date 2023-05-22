import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImagesSourceService } from './image-source.service';
import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {
  constructor(private readonly imagesSourceService: ImagesSourceService) {}

  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }

  async findAll(): Promise<Image[]> {
    const [images, photos] = await Promise.all([
      this.imagesSourceService.getImages(),
      this.imagesSourceService.getPhotos(),
    ]);

    return [...images, ...photos];
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
