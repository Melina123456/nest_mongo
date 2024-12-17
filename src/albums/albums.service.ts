import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from './schemas/album.schema';
import { Model } from 'mongoose';
import { Song } from 'src/songs/schemas/song.schema';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectModel(Album.name) private readonly albumModel: Model<AlbumDocument>,
  ) {}

  async createAlbum(createAlbumDto: CreateAlbumDto): Promise<Album> {
    return this.albumModel.create(createAlbumDto);
  }

  async findAlbums() {
    return this.albumModel.find().populate('songs', null, Song.name);
  }
}
