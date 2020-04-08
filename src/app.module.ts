import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestApplication } from '@nestjs/core';
import { MoviewController } from './model/movie.controller';
import { ModelEntityModule } from './model/movie.module';
import { MovieService } from './model/movie.service';

@Module({
  imports: [
    HttpModule,
    ModelEntityModule,
  ],
  controllers: [AppController, MoviewController],
  providers: [AppService, MovieService],
})
export class AppModule {}
