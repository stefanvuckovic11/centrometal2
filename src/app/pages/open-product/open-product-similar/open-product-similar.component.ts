import { Component, Input } from '@angular/core';
import { ProductInterface } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-open-product-similar',
  templateUrl: './open-product-similar.component.html',
  styleUrls: ['./open-product-similar.component.scss'],
  standalone: false
})
export class OpenProductSimilarComponent {
  @Input() similarProducts: ProductInterface[] = [];
  @Input() similarConfig: {
    headerText?: string;
    footerButtonText?: string;
    buttonBorderColor?: string;
  } = {};
  @Input() productType!: string;
}
