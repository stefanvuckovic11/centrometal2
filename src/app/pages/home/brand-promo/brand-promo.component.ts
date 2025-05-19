import {
  Component,
  OnInit,
  Input,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-brand-promo',
  templateUrl: './brand-promo.component.html',
  styleUrls: ['./brand-promo.component.scss'],
  standalone: false
})
export class BrandPromoComponent implements OnInit {
  @Input() delay = 0;

  isVisible = true;
  private showTimeout?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.initialize();
  }
  private initialize(): void {
    clearTimeout(this.showTimeout);
    if (window.innerWidth <= 1300) {
      this.showTimeout = setTimeout(() => this.isVisible = true, this.delay);
    }
  }

  onClose(): void {
    this.isVisible = false;
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth <= 1300) {
      this.initialize();
    }
  }
}
