import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener
} from '@angular/core';
import { FooterService } from './footer.service';
import { FooterBrand, FooterColumn } from './footer.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false,
})
export class FooterComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('inner', { static: true })
  private inner!: ElementRef<HTMLElement>;

  @ViewChild('track', { static: true })
  private track!: ElementRef<HTMLElement>;

  @ViewChild('prevBtn', { static: true })
  private prevBtn!: ElementRef<HTMLButtonElement>;

  @ViewChild('nextBtn', { static: true })
  private nextBtn!: ElementRef<HTMLButtonElement>;

  private slideWidth: number = 0;
  private autoSlideInterval: number | null = null;

  public brands: FooterBrand[] = [];
  public linkColumns: FooterColumn[] = [];

  constructor(
      private renderer: Renderer2,
      private footerService: FooterService
  ) {}

  public ngOnInit(): void {
    this.footerService.getFooterData().subscribe(data => {
      this.brands = data.brands;
      this.linkColumns = data.linkColumns;
    });
  }

  public ngAfterViewInit(): void {
    this.slideWidth = this.inner.nativeElement.offsetWidth * 0.2;
    this.updateMediaBehavior();
  }

  public ngOnDestroy(): void {
    if (this.autoSlideInterval !== null) {
      clearInterval(this.autoSlideInterval);
    }
  }

  public slidePrev(): void {
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

  public slideNext(): void {
    const trackEl = this.track.nativeElement;
    trackEl.insertBefore(trackEl.lastElementChild!, trackEl.firstElementChild);
    this.renderer.setStyle(trackEl, 'transition', 'none');
    this.renderer.setStyle(trackEl, 'transform', `translateX(-${this.slideWidth}px)`);
    void trackEl.offsetHeight;
    this.renderer.setStyle(trackEl, 'transition', 'transform 0.2s ease-in-out');
    this.renderer.setStyle(trackEl, 'transform', 'translateX(0)');
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.slideWidth = this.inner.nativeElement.offsetWidth * 0.2;
    this.updateMediaBehavior();
  }

  private updateMediaBehavior(): void {
    const prev = this.prevBtn.nativeElement;
    const next = this.nextBtn.nativeElement;

    if (window.innerWidth <= 1300) {
      this.renderer.setStyle(prev, 'opacity', '0');
      this.renderer.setStyle(next, 'opacity', '0');
      if (this.autoSlideInterval === null) {
        this.autoSlideInterval = window.setInterval(() => this.slidePrev(), 1000);
      }
    } else {
      this.renderer.setStyle(prev, 'opacity', '1');
      this.renderer.setStyle(next, 'opacity', '1');
      if (this.autoSlideInterval !== null) {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    }
  }
}
