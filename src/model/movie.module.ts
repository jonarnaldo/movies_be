import { CacheModule, Module, HttpModule } from '@nestjs/common';
import { MoviewController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [
    CacheModule.register(),
    HttpModule,
  ],
  controllers: [MoviewController],
  providers: [MovieService],
})
export class MovieModule {}
