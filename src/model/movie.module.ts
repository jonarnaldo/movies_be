import { CacheModule, Module, HttpModule } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [
    CacheModule.register(),
    HttpModule,
  ],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
