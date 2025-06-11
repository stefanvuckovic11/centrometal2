import { Component, Input, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-open-product-gallery',
  templateUrl: './open-product-gallery.component.html',
  styleUrls: ['./open-product-gallery.component.scss'],
  standalone: false

})
export class OpenProductGalleryComponent implements AfterViewInit {
  @Input() public images: string[] = [];

  public activeIndex: number = 0;

  @ViewChildren('trackSlide') private trackSlides!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('thumbItem') private thumbItems!: QueryList<ElementRef<HTMLElement>>;

  public ngAfterViewInit(): void {
    this.updateActiveClasses();
  }

  public select(index: number): void {
    this.activeIndex = index;
    this.updateActiveClasses();
  }

  public prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
    this.updateActiveClasses();
  }

  public next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
    this.updateActiveClasses();
  }

  private updateActiveClasses(): void {
    this.trackSlides.forEach((slide, i: number) => {
      slide.nativeElement.classList.toggle(
          'product-detail__gallery__slider__track-slide--active',
          i === this.activeIndex
      );
    });
    this.thumbItems.forEach((thumb, i: number) => {
      thumb.nativeElement.classList.toggle(
          'product-detail__gallery__slider__thumbnails-item--active',
          i === this.activeIndex
      );
    });
  }
}
