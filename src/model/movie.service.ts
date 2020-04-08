import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import * as dotenv  from 'dotenv';

dotenv.config();

@Injectable()
export class MovieService {
  private readonly defaultLanguage = 'en-US';
  private params = {
    api_key: process.env.API_KEY,
  };
  
  constructor(
    private http: HttpService,
  ) { }

  async findPopular(): Promise<any> {
    return this.http
      .get(`${process.env.API_URL}movie/popular/`, { params: this.params })
      .pipe(map(response => response.data));
  }

  async findOne(search: { query: string }): Promise<any> {
    return this.http
      .get(`${process.env.API_URL}search/movie/`, {
        params: {
          ...this.params,
          language: this.defaultLanguage,
          query: search.query,
          page: 1,
          include_adult: false,
        }
      })
      .pipe(map(response => response.data));
  }

  async getDetail(movieId: string): Promise<any> {
    return this.http
      .get(`${process.env.API_URL}movie/${movieId}`, {
        params: {
          ...this.params,
          language: this.defaultLanguage,
        }
      })
      .pipe(map(response => response.data));
  }  
}
