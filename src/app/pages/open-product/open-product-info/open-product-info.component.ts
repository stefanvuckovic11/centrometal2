import { Component, Input, OnChanges } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-open-product-info',
  templateUrl: './open-product-info.component.html',
  styleUrls: ['./open-product-info.component.scss'],
  standalone: false
})
export class OpenProductInfoComponent implements OnChanges {
  @Input() product!: Product;
  quantity = 1;

  get specEntries(): Array<{ label: string; value: string }> {
    if (!this.product.specifications) {
      return [];
    }
    return Object.entries(this.product.specifications).map(
        ([key, val]) => ({ label: key, value: val })
    );
  }

  ngOnChanges() {
  }
}
