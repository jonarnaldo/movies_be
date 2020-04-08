import { Controller, Get, Param, Query } from '@nestjs/common';
import { EntityService } from './entity.service';

@Controller('entities')
export class ModelEntityController {
  constructor(private entityService: EntityService) {}

  @Get('entity/:id')
  getDetail(@Param('id') id: string): Promise<any> {
    return this.entityService.findOne(id);
  }

  @Get('find')
  findOne(@Query() search: { query: string }): Promise<any> {
    return this.entityService.findAll(search);
  }
}
