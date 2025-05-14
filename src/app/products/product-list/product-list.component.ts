import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { ProductsByCategory } from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: false
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
