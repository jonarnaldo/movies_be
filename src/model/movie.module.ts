import { Module, HttpModule } from '@nestjs/common';
import { MoviewController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [
    HttpModule,
  ],
  controllers: [MoviewController],
  providers: [MovieService],
})
export class ModelEntityModule {}
