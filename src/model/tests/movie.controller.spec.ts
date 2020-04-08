import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, CacheModule, HttpModule, HttpService } from '@nestjs/common';
import { MovieController } from '../movie.controller';
import { MovieService } from '../movie.service';
import { AxiosResponse } from 'axios';
import { of } from 'rxjs';
import * as request from 'supertest';

describe('MovieController', () => {
  let app: INestApplication;
  let controller: MovieController;
  let httpService: HttpService;
  let movieService: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        CacheModule.register(),
        HttpModule,
      ],
      controllers: [MovieController],
      providers: [MovieService],
    }).compile();

    app = module.createNestApplication();
    httpService = module.get<HttpService>(HttpService);
    controller = module.get<MovieController>(MovieController);
    movieService = module.get<MovieService>(MovieService);
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GET popular movies', async () => {
    const result = {
      "page": 1,
      "total_results": 10000,
      "total_pages": 500,
      "results": [
        {
          "popularity": 462.659,
          "vote_count": 2853,
          "video": false,
          "poster_path": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          "id": 419704,
          "adult": false,
          "backdrop_path": "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
          "original_language": "en",
          "original_title": "Ad Astra",
          "genre_ids": [
              18,
              878
          ],
          "title": "Ad Astra",
          "vote_average": 5.9,
          "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
          "release_date": "2019-09-17"
        },
      ]
    };

    jest.spyOn(movieService, 'findPopular').mockResolvedValue(result);
    expect(await movieService.findPopular()).toBe(result);
  });

  it('GET find movie', async () => {
    const result = {
      "page": 1,
      "total_results": 47,
      "total_pages": 3,
      "results": [
        {
          "popularity": 49.752,
          "vote_count": 21893,
          "video": false,
          "poster_path": "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
          "id": 24428,
          "adult": false,
          "backdrop_path": "/hFE7x236SqBtajMKDlTWa4ynoni.jpg",
          "original_language": "en",
          "original_title": "The Avengers",
          "genre_ids": [
              28,
              12,
              878
          ],
          "title": "The Avengers",
          "vote_average": 7.7,
          "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
          "release_date": "2012-04-25"
        },
      ]
    };

    jest.spyOn(movieService, 'findOne').mockResolvedValue(result);
    expect(await movieService.findOne({ query: 'avengers' })).toBe(result);
  });

  it('GET get detail of movie', async () => {
    const result = {
      "adult": false,
      "backdrop_path": "/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg",
      "belongs_to_collection": {
        "id": 86311,
        "name": "The Avengers Collection",
        "poster_path": "/yFSIUVTCvgYrpalUktulvk3Gi5Y.jpg",
        "backdrop_path": "/zuW6fOiusv4X9nnW3paHGfXcSll.jpg"
      },
      "budget": 356000000,
      "genres": [
        {
          "id": 12,
          "name": "Adventure"
        },
        {
          "id": 878,
          "name": "Science Fiction"
        },
        {
          "id": 28,
          "name": "Action"
        }
      ],
      "homepage": "https://www.marvel.com/movies/avengers-endgame",
      "id": 299534,
      "imdb_id": "tt4154796",
      "original_language": "en",
      "original_title": "Avengers: Endgame",
      "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      "popularity": 54.174,
      "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "production_companies": [
        {
          "id": 420,
          "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
          "name": "Marvel Studios",
          "origin_country": "US"
        }
      ],
      "production_countries": [
        {
          "iso_3166_1": "US",
          "name": "United States of America"
        }
      ],
      "release_date": "2019-04-24",
      "revenue": 2797800564,
      "runtime": 181,
      "spoken_languages": [
        {
          "iso_639_1": "en",
          "name": "English"
        },
        {
          "iso_639_1": "ja",
          "name": "日本語"
        },
        {
          "iso_639_1": "xh",
          "name": ""
        }
      ],
      "status": "Released",
      "tagline": "Part of the journey is the end.",
      "title": "Avengers: Endgame",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 12225
    };

    jest.spyOn(movieService, 'getDetail').mockResolvedValue(result);
    expect(await movieService.getDetail('12345')).toBe(result);
  });
});

