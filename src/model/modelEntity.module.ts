import { Module, HttpModule } from '@nestjs/common';
import { ModelEntityController } from './modelEntity.controller';
import { EntityService } from './entity.service';

@Module({
  imports: [
    HttpModule,
  ],
  controllers: [ModelEntityController],
  providers: [EntityService],
})
export class ModelEntityModule {}
