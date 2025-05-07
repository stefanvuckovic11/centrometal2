import { Component, OnInit } from '@angular/core';
import { ProductService }     from '../products.service';

@Component({
  selector: 'app-product-list',
    standalone:false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productsByCategory: { [key: string]: any[] } = {};
  loading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      const categories = ['hotOffer','action','recommended','new','sale'];
      for (let cat of categories) {
        this.productsByCategory[cat] = products.filter(p => p.category === cat);
      }
      this.loading = false;
    });
  }
}