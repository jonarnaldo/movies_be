import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from '../movie.service';
import { CacheModule, Module, HttpModule } from '@nestjs/common';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [MovieService],
    }).compile();

    service = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
