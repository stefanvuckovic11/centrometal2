import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  Renderer2
} from '@angular/core';

interface Slide {
  alt: string;
  line1: string;
  line2: string;
  buttonText: string;
  buttonLink?: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: false
})
export class SliderComponent implements AfterViewInit, OnDestroy {
  @ViewChild('track', { static: true }) track!: ElementRef<HTMLElement>;

  slides: Slide[] = [
    {
      alt: 'motorna šega',
      line1: 'motorna',
      line2: 'šega',
      buttonText: 'VIDI PROIZVOD',
      buttonLink: '#'
    },
    {
      alt: 'motorna šega',
      line1: 'motorna',
      line2: 'šega',
      buttonText: 'VIDI PROIZVOD',
      buttonLink: '#'
    },
    {
      alt: 'motorna šega',
      line1: 'motorna',
      line2: 'šega',
      buttonText: 'VIDI PROIZVOD',
      buttonLink: '#'
    },
    {
      alt: 'motorna šega',
      line1: 'motorna',
      line2: 'šega',
      buttonText: 'VIDI PROIZVOD',
      buttonLink: '#'
    }
  ];

  currentIndex = 0;
  private autoInterval!: any;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.autoInterval = setInterval(() => {
      this.goTo((this.currentIndex + 1) % this.slides.length);
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.autoInterval);
  }

  goTo(index: number): void {
    this.currentIndex = index;
    const offset = -100 * index;
    this.renderer.setStyle(
      this.track.nativeElement,
      'transform',
      `translateX(${offset}%)`
    );
  }
}
