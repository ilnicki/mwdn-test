import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { ImagesSourceService } from './image-source.service';

@Module({
  controllers: [ImagesController],
  providers: [ImagesService, ImagesSourceService],
})
export class ImagesModule {}
