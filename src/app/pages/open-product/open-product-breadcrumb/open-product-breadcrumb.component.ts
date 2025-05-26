import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-open-product-breadcrumb',
  templateUrl: './open-product-breadcrumb.component.html',
  styleUrls: ['./open-product-breadcrumb.component.scss'],
  standalone: false
})
export class OpenProductBreadcrumbComponent {
  @Input() product!: Product;
}
