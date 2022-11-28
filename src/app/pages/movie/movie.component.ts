import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Cast,
  Crew,
  Movie,
  MovieImages,
  MovieVideo,
} from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movie-services/movies.service';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';
import { Genre } from 'src/app/models/genres';
import { ProductionCompanies } from 'src/app/models/production-companies';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;

  imagesSizes = IMAGES_SIZES;
  genres: Genre[] = [];
  productionCompanies: ProductionCompanies[] = [];
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCast: Cast[] = [];
  movieCrew: Crew[] = [];
  similarMovies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      console.log(id);
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getSimilarMovies(id);
    });
  }

  getMovie(id: string) {
    this.movieService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
      this.genres = movie.genres;
      this.productionCompanies = movie.production_companies;
      console.log(this.movie);
      console.log(this.genres);
    });
  }

  getMovieVideos(id: string) {
    this.movieService.getMovieVideos(id).subscribe((videos) => {
      this.movieVideos = videos;
    });
  }

  getMovieImages(id: string) {
    this.movieService.getMovieImages(id).subscribe((images) => {
      this.movieImages = images;
    });
  }

  getMovieCredits(id: string) {
    this.movieService.getCredits(id).subscribe((credit) => {
      this.movieCast = credit.cast;
      this.movieCrew = credit.crew;
      console.log(this.movieCast);
    });
  }

  getSimilarMovies(id: string, page: number = 1) {
    this.movieService.getSimilarMovies(id, page).subscribe((suggestedMovie) => {
      this.similarMovies = suggestedMovie.results;
      console.log(this.similarMovies);
    });
  }
}
