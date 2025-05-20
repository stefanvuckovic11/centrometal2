import { Component, OnInit }         from '@angular/core';
import { ActivatedRoute }            from '@angular/router';
import { ProductService }            from '../../products/products.service';
import { SectionService }            from '../../products/product-list/section.service';
import { Section }                   from '../../products/product-list/section';
import { Product }                   from '../../interfaces/product';
import { FilterCriteria }            from './filter-bar/filter';


@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.scss'],
  standalone:false
})
export class SeeAllComponent implements OnInit {
  category           = '';
  headerText         = '';
  loading            = true;

  allProducts: Product[]       = [];
  displayedProducts: Product[] = [];
  skeletonArray    = Array(12);

  constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
      private sectionService: SectionService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.loadProducts();
      this.resolveHeaderText();
    });
  }

  private loadProducts(): void {
    this.loading = true;
    this.productService.getProducts().subscribe(all => {
      this.allProducts       = all.filter(p => p.category === this.category);
      this.displayedProducts = [...this.allProducts];
      this.loading           = false;
    });
  }

  private resolveHeaderText(): void {
    this.sectionService.getSections().subscribe((sections: Section[]) => {
      const match = sections.find(s => s.key === this.category);
      this.headerText = match?.headerText || this.category;
    });
  }

  onFilterChange(criteria: FilterCriteria): void {
    let filtered = this.allProducts.filter(p => {
      const price = parseFloat(p.price.new.replace(/[^0-9.]/g, ''));
      return price >= criteria.minPrice && price <= criteria.maxPrice;
    });

    switch (criteria.sortType) {
      case 'priceAsc':
        filtered.sort((a, b) =>
            parseFloat(a.price.new.replace(/[^0-9.]/g, '')) -
            parseFloat(b.price.new.replace(/[^0-9.]/g, ''))
        );
        break;
      case 'priceDesc':
        filtered.sort((a, b) =>
            parseFloat(b.price.new.replace(/[^0-9.]/g, '')) -
            parseFloat(a.price.new.replace(/[^0-9.]/g, ''))
        );
        break;
      case 'nameAsc':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'nameDesc':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    this.displayedProducts = filtered;
  }
}
