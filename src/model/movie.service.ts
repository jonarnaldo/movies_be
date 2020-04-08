import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import * as dotenv  from 'dotenv';

dotenv.config();

@Injectable()
export class MovieService {
  private readonly baseURL = 'https://api.themoviedb.org/3/';
  private readonly defaultLanguage = 'en-US'
  
  constructor(
    private http: HttpService,
  ) { }

  async findPopular(): Promise<any> {
    return this.http
      .get(`${this.baseURL}movie/popular/`, {
        params: {
          api_key: process.env.API_KEY,
        }
      })
      .pipe(map(response => response.data));
  }

  async findOne(search: { query: string }): Promise<any> {
    return this.http
      .get(`${this.baseURL}search/movie/`, {
        params: {
          api_key: process.env.API_KEY,
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
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: process.env.API_KEY,
          language: this.defaultLanguage,
        }
      })
      .pipe(map(response => response.data));
  }  
}
