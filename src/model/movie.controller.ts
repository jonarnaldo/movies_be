import { Controller, Get, Param, Query } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies')
export class MoviewController {
  constructor(private entityService: MovieService) {}

  @Get('find')
  findOne(@Query() search: { query: string }): Promise<any> {
    return this.entityService.findOne(search);
  }
}
