import { Component, OnInit, Input } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-open-product-additional',
    templateUrl: './open-product-additional.component.html',
    imports: [
        NgIf
    ],
    styleUrls: ['./open-product-additional.component.scss']
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
