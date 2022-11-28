import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-item-banner',
  templateUrl: './item-banner.component.html',
  styleUrls: ['./item-banner.component.scss'],
})
export class ItemBannerComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() listTitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
