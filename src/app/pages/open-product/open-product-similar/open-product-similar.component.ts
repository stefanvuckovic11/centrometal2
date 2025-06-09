import { Component, Input } from '@angular/core';
import { ProductInterface } from '../../../interfaces/product.interface';
import {SharedModule} from "../../../shared/shared.module";

@Component({
  selector: 'app-open-product-similar',
  templateUrl: './open-product-similar.component.html',
  imports: [
    SharedModule
  ],
  styleUrls: ['./open-product-similar.component.scss']
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
