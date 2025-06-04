import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-brand-promo',
  templateUrl: './brand-promo.component.html',
  styleUrls: ['./brand-promo.component.scss'],
  standalone: false
})
export class BrandPromoComponent implements OnInit {
  @Input() public delay: number = 0;

  public isVisible: boolean = true;
  private showTimeout?: number;

  public ngOnInit(): void {
    this.initialize();
  }

  private initialize(): void {
    clearTimeout(this.showTimeout);

    if (window.innerWidth <= 1300) {
      this.showTimeout = window.setTimeout(() => {
        this.isVisible = true;
      }, this.delay);
    }
  }

  public onClose(): void {
    this.isVisible = false;
  }

  @HostListener('window:resize')
  public onResize(): void {
    if (window.innerWidth <= 1300) {
      this.initialize();
    }
  }
}
