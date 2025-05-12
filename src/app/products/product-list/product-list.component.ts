import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgForOf, KeyValuePipe, TitleCasePipe, NgOptimizedImage } from '@angular/common';
import { ProductService } from '../products.service';
import { ProductsByCategory } from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    NgForOf,
    KeyValuePipe,
    TitleCasePipe,
    NgOptimizedImage
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productsByCategory: ProductsByCategory = {};
  loading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProductsByCategory();
  }

  private fetchProductsByCategory(): void {
    this.productService.getProducts().subscribe(products => {
      this.productsByCategory = products.reduce<ProductsByCategory>((acc, p) => {
        (acc[p.category] = acc[p.category] || []).push(p);
        return acc;
      }, {});
      this.loading = false;
    });
  }
}
