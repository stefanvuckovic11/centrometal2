import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { ProductsByCategory, ProductCategory } from '../../interfaces/product';
import { Section } from './section';
import { SectionService } from './section.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: false
})
export class ProductListComponent implements OnInit {
  productsByCategory: ProductsByCategory = {};
  sections: Section[] = [];
  loading = true;

  ProductCategory = ProductCategory;

  constructor(
      private productService: ProductService,
      private sectionService: SectionService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchSections();
  }

  private fetchProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.productsByCategory = products.reduce<ProductsByCategory>((acc, p) => {
        (acc[p.category] = acc[p.category] || []).push(p);
        return acc;
      }, {});
      this.loading = false;
    });
  }

  private fetchSections(): void {
    this.sectionService.getSections().subscribe(sections => {
      this.sections = sections;
    });
  }
}
