import { Injectable, HttpService } from '@nestjs/common';
import * as dotenv  from 'dotenv';

dotenv.config();

@Injectable()
export class EntityService {
  constructor(
    private http: HttpService,
  ) { }

  async findOne(id: string) {
    return id;
  }

  async findAll(search: { query: string }) {
    return search;;
  }
}
