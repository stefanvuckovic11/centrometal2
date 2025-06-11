import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-open-product-additional',
    templateUrl: './open-product-additional.component.html',
    standalone:false,
    styleUrls: ['./open-product-additional.component.scss']
})
export class OpenProductAdditionalComponent implements OnInit {
  @Input() product: any;
  activeTab: 'proizvodna-lista' | 'guide' | 'rating' | 'email' = 'proizvodna-lista';

  constructor() { }

  public ngOnInit(): void { }

  setActiveTab(tab: 'proizvodna-lista' | 'guide' | 'rating' | 'email'): void {
    this.activeTab = tab;
  }
}
