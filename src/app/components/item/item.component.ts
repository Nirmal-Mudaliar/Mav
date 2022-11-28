import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';

@Component({
  selector: 'app-movie-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() item: Movie | null = null;

  imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {}
}
