import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genres';
import { MoviesService } from 'src/app/services/movie-services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.getGenre();
  }

  getGenre() {
    this.movieService.getGenre().subscribe((genre) => {
      this.genres = genre.genres;
      console.log(this.genres);
    });
  }
}
