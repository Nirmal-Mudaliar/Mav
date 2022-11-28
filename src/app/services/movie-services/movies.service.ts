import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANTS } from '../../constants/urls';
import {
  CreditsDto,
  Movie,
  MovieDto,
  MovieImages,
  MovieVideo,
  MovieVideoDto,
} from '../../models/movie';
import { switchMap, of } from 'rxjs';
import { Genre, GenreDto } from 'src/app/models/genres';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http
      .get<MovieDto>(
        `${CONSTANTS.baseUrl}/movie/${type}?api_key=${CONSTANTS.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  getSearchedMovies(page: number = 1, query?: string) {
    const uri = query ? '/search/movie' : '/movie/popular';
    return this.http.get<MovieDto>(
      `${CONSTANTS.baseUrl}${uri}?page=${page}&query=${query}&api_key=${CONSTANTS.apiKey}`
    );
  }

  getMovie(id: string) {
    return this.http.get<Movie>(
      `${CONSTANTS.baseUrl}/movie/${id}?api_key=${CONSTANTS.apiKey}`
    );
  }

  getMovieVideos(id: string) {
    return this.http
      .get<MovieVideoDto>(
        `${CONSTANTS.baseUrl}/movie/${id}/videos?api_key=${CONSTANTS.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(
      `${CONSTANTS.baseUrl}/movie/${id}/images?api_key=${CONSTANTS.apiKey}`
    );
  }

  getCredits(id: string) {
    return this.http.get<CreditsDto>(
      `${CONSTANTS.baseUrl}/movie/${id}/credits?api_key=${CONSTANTS.apiKey}`
    );
  }

  getSimilarMovies(id: string, page: number = 1) {
    return this.http.get<MovieDto>(
      `${CONSTANTS.baseUrl}/movie/${id}/similar?api_key=${CONSTANTS.apiKey}`
    );
  }

  getGenre() {
    return this.http.get<GenreDto>(
      `${CONSTANTS.baseUrl}/genre/movie/list?api_key=${CONSTANTS.apiKey}`
    );
  }

  getMoviesByGenre(page: number, genreId: string) {
    return this.http.get<MovieDto>(
      `${CONSTANTS.baseUrl}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${CONSTANTS.apiKey}`
    );
  }
}
