import { Component } from '@angular/core';
import { Carousel } from 'primeng/carousel';

// import {
//   ElementRef,
//   NgZone,
//   ChangeDetectorRef,
//   Renderer2,
// } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Mav';

  // constructor(
  //   public override el: ElementRef,
  //   public override zone: NgZone,
  //   public override cd: ChangeDetectorRef,
  //   private override renderer: Renderer2,
  //   public doc: Document
  // ) {
  //   super(el, zone, cd, renderer, doc);
  //   Carousel.prototype.changePageOnTouch = (e, diff) => {};
  // }
}
