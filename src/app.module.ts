import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsModule } from './songs/songs.module';
import { AlbumsModule } from './albums/albums.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

// import * as dotenv from 'dotenv';

// dotenv.config();

@Module({
  imports: [
    // MongooseModule.forRoot(process.env.DATABASE_URL),
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    SongsModule,
    AlbumsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
