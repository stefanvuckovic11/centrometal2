import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener
} from '@angular/core';

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

  brands = [
    { name: 'Sony', img: '/images/sony.png' },
    { name: 'Panasonic', img: '/images/panasonic.png' },
    { name: 'Gorenje', img: '/images/gorenje.png' },
    { name: 'Samsung', img: '/images/samsung.png' },
    { name: 'Indesit', img: '/images/indesit.png' }
  ];

  linkColumns = [
    {
      title: 'Informacije',
      links: [
        { label: 'O nama', url: '/about' },
        { label: 'Gdje kupiti', url: '/where-to-buy' },
        { label: 'Zapošljavanje', url: '/careers' },
        { label: 'Aktivnosti', url: '/activities' }
      ]
    },
    {
      title: 'Aktivnosti',
      links: [
        { label: 'Akcije', url: '/action' },
        { label: 'Noviteti', url: '/news' },
        { label: 'Rasprodaja', url: '/sale' },
        { label: 'Marketing', url: '/marketing' }
      ]
    },
    {
      title: 'Moja strana',
      links: [
        { label: 'Registracija', url: '/register' },
        { label: 'Prijava', url: '/login' },
        { label: 'Korisnička strana', url: '/account' },
        { label: 'Korpa', url: '/cart' }
      ]
    },
    {
      title: 'Plaćanje i dostava',
      links: [
        { label: 'Načini plaćanja', url: '/payment-methods' },
        { label: 'Sigurnost plaćanja', url: '/payment-security' },
        { label: 'Brza i pouzdana dostava', url: '/delivery' },
        { label: 'Odaberite datum dostave', url: '/delivery-date' }
      ]
    },
    {
      title: 'Povrat i zamjena',
      links: [
        { label: 'Servis', url: '/service' },
        { label: 'Reklamacije', url: '/complaints' }
      ]
    }
  ];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.slideWidth = this.inner.nativeElement.offsetWidth * 0.2;
    this.updateMediaBehavior();
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
