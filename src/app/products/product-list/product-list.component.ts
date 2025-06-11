import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ProductService } from '../products.service';
import { ProductInterface, ProductCategory } from '../../interfaces/product.interface';
import { Section } from './section';
import { SectionService } from './section.service';
import {NgClass} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone:false
})
export class ProductListComponent implements OnInit {
  public productsByCategory: { [category: string]: ProductInterface[] } = {};
  public sections: Section[] = [];
  public loading: boolean = true;

  public ProductCategory = ProductCategory;

  constructor(
      private productService: ProductService,
      private sectionService: SectionService
  ) {}

  ngOnInit(): void {
    this.loading = true;

    forkJoin({
      products: this.productService.getProducts(),
      sections: this.sectionService.getSections()
    }).subscribe({
      next: ({ products, sections }) => {
        this.productsByCategory = products.reduce<{ [category: string]: ProductInterface[] }>(
            (acc, p) => {
              (acc[p.category] = acc[p.category] || []).push(p);
              return acc;
            },
            {}
        );
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
