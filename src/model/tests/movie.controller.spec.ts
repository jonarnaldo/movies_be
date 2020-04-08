import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, CacheModule, HttpModule, HttpService } from '@nestjs/common';
import { MoviewController } from '../movie.controller';
import { MovieService } from '../movie.service';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';
import * as request from 'supertest';

describe('MoviewController', () => {
  let app: INestApplication;
  let controller: MoviewController;
  let httpService: HttpService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        CacheModule.register(),
        HttpModule,
      ],
      controllers: [MoviewController],
      providers: [MovieService],
    }).compile();

    app = module.createNestApplication();
    httpService = module.get<HttpService>(HttpService);
    controller = module.get<MoviewController>(MoviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
