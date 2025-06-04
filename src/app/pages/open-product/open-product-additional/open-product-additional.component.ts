import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-open-product-additional',
  standalone: false,
  templateUrl: './open-product-additional.component.html',
  styleUrl: './open-product-additional.component.scss'
})
export class OpenProductAdditionalComponent implements OnInit {
  @Input() product: any;
  activeTab: 'proizvodna-lista' | 'guide' | 'rating' | 'email' = 'proizvodna-lista';

  constructor() { }

  ngOnInit(): void { }
  setActiveTab(tab: 'proizvodna-lista' | 'guide' | 'rating' | 'email'): void {
    this.activeTab = tab;
  }
}