import { Test, TestingModule } from '@nestjs/testing';
import { MoviewController } from '../movie.controller';

describe('MoviewController', () => {
  let controller: MoviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviewController],
    }).compile();

    controller = module.get<MoviewController>(MoviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
