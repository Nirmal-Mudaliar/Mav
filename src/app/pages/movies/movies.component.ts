import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movie-services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genreId: string | null = null;
  total_result: number = 0;
  searchValue: string | null = null;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenreId(genreId, 1);
      } else {
        this.getPagedMovies(1);
      }
    });
  }

  getPagedMovies(page: number = 1, query?: string) {
    this.moviesService.getSearchedMovies(page, query).subscribe((movies) => {
      this.movies = movies.results;
      this.total_result = movies.total_results;
    });
  }

  paginate(event: any) {
    // console.log(event);
    const pageNumber: number = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenreId(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.getPagedMovies(pageNumber, this.searchValue);
      } else {
        this.getPagedMovies(pageNumber);
      }
    }
  }

  getMoviesByGenreId(genreId: string, page: number = 1) {
    this.moviesService
      .getMoviesByGenre(page, genreId)
      .subscribe((moviesByGenre) => {
        this.movies = moviesByGenre.results;
        this.total_result = moviesByGenre.total_results;
      });
  }

  searchChanged() {
    if (this.searchValue) {
      this.getPagedMovies(1, this.searchValue);
    }
  }
}
