import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../products/products.service';
import { Product } from '../../interfaces/product';


@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.scss'],
  standalone:false
})
export class SeeAllComponent implements OnInit {
  category: string = '';
  products: Product[] = [];
  loading = true;

  constructor(
      private route: ActivatedRoute,
      private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.fetchProducts();
    });
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(allProducts => {
      this.products = allProducts.filter(p => p.category === this.category);
      this.loading = false;
    });
  }
}
