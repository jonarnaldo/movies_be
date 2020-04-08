import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestApplication } from '@nestjs/core';
import { ModelEntityController } from './model/modelEntity.controller';
import { ModelEntityModule } from './model/modelEntity.module';
import { EntityService } from './model/entity.service';

@Module({
  imports: [
    HttpModule,
    ModelEntityModule,
  ],
  controllers: [AppController, ModelEntityController],
  providers: [AppService, EntityService],
})
export class AppModule {}
