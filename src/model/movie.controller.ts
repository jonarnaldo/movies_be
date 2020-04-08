import { Controller, Get, Param, Query } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies')
export class MoviewController {
  constructor(private movieService: MovieService) {}

  @Get('popular')
  findPopular(): Promise<any> {
    return this.movieService.findPopular();
  }

  @Get('find')
  findOne(@Query() search: { query: string }): Promise<any> {
    return this.movieService.findOne(search);
  }

  @Get('movie/:id')
  getDetail(@Param('id') id: string): Promise<any> {
    return this.movieService.getDetail(id);
  }  
}
