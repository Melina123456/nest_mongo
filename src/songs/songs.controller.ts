import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song.dto';
import { Song } from './schemas/song.schema';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}

  @Post()
  create(@Body() createSongDto: CreateSongDTO) {
    return this.songService.create(createSongDto);
  }

  @Get()
  find(): Promise<Song[]> {
    return this.songService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Song> {
    return this.songService.findById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.songService.delete(id);
  }
}
