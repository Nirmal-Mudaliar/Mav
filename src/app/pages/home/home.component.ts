import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { TV } from 'src/app/models/tv';
import { MoviesService } from 'src/app/services/movie-services/movies.service';
import { TvService } from 'src/app/services/tv-services/tv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovie: Movie[] = [];
  topRatedMovies: Movie[] = [];

  popularTvSeries: TV[] = [];

  constructor(
    private moviesService: MoviesService,
    private tvService: TvService
  ) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
      console.log(this.popularMovies);
    });

    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
      console.log(this.topRatedMovies);
    });

    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovie = movies;
      console.log(this.upcomingMovie);
    });

    this.tvService.getTvSeries('popular').subscribe((tvSeries) => {
      this.popularTvSeries = tvSeries;
      console.log(this.popularTvSeries);
    });
  }
}
