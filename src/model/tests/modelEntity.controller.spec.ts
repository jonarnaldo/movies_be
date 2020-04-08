import { Test, TestingModule } from '@nestjs/testing';
import { ModelEntityController } from '../modelEntity.controller';

describe('EntityModel Controller', () => {
  let controller: ModelEntityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModelEntityController],
    }).compile();

    controller = module.get<ModelEntityController>(ModelEntityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
