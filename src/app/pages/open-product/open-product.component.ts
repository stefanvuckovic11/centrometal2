import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import { ProductService }               from '../../products/products.service';
import { Product }                      from '../../interfaces/product';
import { Subject, takeUntil, map, take } from 'rxjs';

@Component({
  selector: 'app-open-product',
  templateUrl: './open-product.component.html',
  styleUrls: ['./open-product.component.scss'],
  standalone: false
})
export class OpenProductComponent implements OnInit, OnDestroy {
  product?: Product;
  isLoading = true;
  error?: string;

  private destroy$ = new Subject<void>();

  constructor(
      private route: ActivatedRoute,
      private productService: ProductService
  ) {}

  ngOnInit() {
    const idStr = this.route.snapshot.paramMap.get('id');
    const id    = idStr ? Number(idStr) : NaN;

    if (isNaN(id)) {
      this.error     = 'Invalid product ID';
      this.isLoading = false;
      return;
    }

    this.productService.getProducts()
        .pipe(
            take(1),
            map(list => list.find(p => Number(p.id) === id)),
            takeUntil(this.destroy$)
        )
        .subscribe({
          next: found => {
            if (!found) {
              this.error = `Product #${id} not found`;
            } else {
              this.product = found;
            }
            this.isLoading = false;
          },
          error: err => {
            console.error('greska u ucitavanju proizvoda', err);
          }
        });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
