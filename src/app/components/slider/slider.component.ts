import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  state,
} from '@angular/animations';
import { Movie } from 'src/app/models/movie';
import { Utils } from 'src/app/constants/utils';
import { IMAGES_SIZES } from 'src/app/constants/image-sizes';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),

      transition('void<=>*', animate(`1000ms`)),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];

  currentSlideIndex: number = 0;

  readonly imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
    }, Utils.SLIDER_ANIM_TIME);
  }
}
