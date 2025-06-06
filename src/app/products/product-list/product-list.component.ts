import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ProductService } from '../products.service';
import { ProductsByCategory, ProductCategory } from '../../interfaces/product.interface';
import { Section } from './section';
import { SectionService } from './section.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: false
})
export class ProductListComponent implements OnInit {
  public productsByCategory: ProductsByCategory = {};
  public sections: Section[] = [];
  public loading: boolean = true;

  public ProductCategory = ProductCategory;

  constructor(
      private productService: ProductService,
      private sectionService: SectionService
  ) {}

  ngOnInit(): void {
    this.loading = true;

    //paralelrni fork join pristup
    forkJoin({
      products: this.productService.getProducts(),
      sections: this.sectionService.getSections()
    }).subscribe({
      next: ({ products, sections }) => {
        this.productsByCategory = products.reduce<ProductsByCategory>((acc, p) => {
          (acc[p.category] = acc[p.category] || []).push(p);
          return acc;
        }, {});

        this.sections = sections;

        this.loading = false;
      },
      error: err => {
        console.error('Greška pri učitavanju proizvoda ili sekcija:', err);
        this.loading = false;
      }
    });
  }
}
