import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Album } from './schemas/album.schema';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post()
  create(@Body() createAlbumDto: CreateAlbumDto): Promise<Album> {
    return this.albumsService.createAlbum(createAlbumDto);
  }

  @Get()
  findAll(): Promise<Album[]> {
    return this.albumsService.findAlbums();
  }
}
