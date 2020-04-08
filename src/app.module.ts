import { CacheModule, Module, HttpModule, CacheInterceptor } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestApplication } from '@nestjs/core';
import { MoviewController } from './model/movie.controller';
import { MovieModule } from './model/movie.module';
import { MovieService } from './model/movie.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    CacheModule.register({
      ttl: 30,
      max: 10,
    }),
    HttpModule,
    MovieModule,
  ],
  controllers: [
    AppController,
    MoviewController
  ],
  providers: [
    AppService, 
    MovieService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
