import { Component, Input, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-open-product-gallery',
  templateUrl: './open-product-gallery.component.html',
  styleUrls: ['./open-product-gallery.component.scss'],
  standalone:false
})
export class OpenProductGalleryComponent implements AfterViewInit {
  @Input() images: string[] = [];

  activeIndex = 0;

  @ViewChildren('trackSlide') trackSlides!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('thumbItem') thumbItems!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit() {
    this.updateActiveClasses();
  }

  select(index: number) {
    this.activeIndex = index;
    this.updateActiveClasses();
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
    this.updateActiveClasses();
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
    this.updateActiveClasses();
  }

  private updateActiveClasses() {
    this.trackSlides.forEach((slide, i) => {
      slide.nativeElement.classList.toggle(
          'product-detail__gallery__slider__track-slide--active',
          i === this.activeIndex
      );
    });
    this.thumbItems.forEach((thumb, i) => {
      thumb.nativeElement.classList.toggle(
          'product-detail__gallery__slider__thumbnails-item--active',
          i === this.activeIndex
      );
    });
  }
}
