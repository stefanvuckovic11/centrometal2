import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../products/products.service';
import { Product } from '../../interfaces/product';
import { SectionService } from '../../products/product-list/section.service';
import { Section } from '../../products/product-list/section';

@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.component.html',
  styleUrls: ['./see-all.component.scss'],
  standalone: false
})
export class SeeAllComponent implements OnInit {
  category: string = '';
  headerText: string = '';
  products: Product[] = [];
  loading = true;

  constructor(
      private route: ActivatedRoute,
      private productService: ProductService,
      private sectionService: SectionService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.fetchProducts();
      this.resolveHeaderText();
    });
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(allProducts => {
      this.products = allProducts.filter(p => p.category === this.category);
      this.loading = false;
    });
  }


  resolveHeaderText(): void {
    this.sectionService.getSections().subscribe((sections: Section[]) => {
      const match = sections.find(section => section.key === this.category);
      this.headerText = match?.headerText || this.category;
    });
  }
}
