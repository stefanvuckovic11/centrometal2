import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener
} from '@angular/core';
import { FooterService } from './footer.service';
import { FooterBrand, FooterColumn } from './footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false,
})
export class FooterComponent implements AfterViewInit, OnDestroy {
  @ViewChild('inner', { static: true }) inner!: ElementRef<HTMLElement>;
  @ViewChild('track', { static: true }) track!: ElementRef<HTMLElement>;
  @ViewChild('prevBtn', { static: true }) prevBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('nextBtn', { static: true }) nextBtn!: ElementRef<HTMLButtonElement>;

  slideWidth = 0;
  autoSlideInterval: any = null;

  brands: FooterBrand[] = [];
  linkColumns: FooterColumn[] = [];

  constructor(private renderer: Renderer2, private footerService: FooterService) {}

  ngAfterViewInit(): void {
    this.slideWidth = this.inner.nativeElement.offsetWidth * 0.2;
    this.updateMediaBehavior();
  }

  ngOnInit(): void {
    this.footerService.getFooterData().subscribe(data => {
      this.brands = data.brands;
      this.linkColumns = data.linkColumns;
    });
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  slidePrev(): void {
    const trackEl = this.track.nativeElement;
    this.renderer.setStyle(trackEl, 'transition', 'transform 0.2s ease-in-out');
    this.renderer.setStyle(trackEl, 'transform', `translateX(-${this.slideWidth}px)`);

    const onEnd = () => {
      trackEl.appendChild(trackEl.firstElementChild!);
      this.renderer.setStyle(trackEl, 'transition', 'none');
      this.renderer.setStyle(trackEl, 'transform', 'translateX(0)');
      trackEl.removeEventListener('transitionend', onEnd);
    };
    trackEl.addEventListener('transitionend', onEnd);
  }

  slideNext(): void {
    const trackEl = this.track.nativeElement;
    trackEl.insertBefore(trackEl.lastElementChild!, trackEl.firstElementChild);
    this.renderer.setStyle(trackEl, 'transition', 'none');
    this.renderer.setStyle(trackEl, 'transform', `translateX(-${this.slideWidth}px)`);
    void trackEl.offsetHeight;
    this.renderer.setStyle(trackEl, 'transition', 'transform 0.2s ease-in-out');
    this.renderer.setStyle(trackEl, 'transform', 'translateX(0)');
  }

  @HostListener('window:resize')
  onResize(): void {
    this.slideWidth = this.inner.nativeElement.offsetWidth * 0.2;
    this.updateMediaBehavior();
  }

  private updateMediaBehavior(): void {
    const prev = this.prevBtn.nativeElement;
    const next = this.nextBtn.nativeElement;

    if (window.innerWidth <= 1300) {
      this.renderer.setStyle(prev, 'opacity', '0');
      this.renderer.setStyle(next, 'opacity', '0');
      if (!this.autoSlideInterval) {
        this.autoSlideInterval = setInterval(() => this.slidePrev(), 1000);
      }
    } else {
      this.renderer.setStyle(prev, 'opacity', '1');
      this.renderer.setStyle(next, 'opacity', '1');
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    }
  }
}
