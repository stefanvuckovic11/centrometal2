import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import { ProductService }               from '../../products/products.service';
import { ProductInterface }             from '../../interfaces/product.interface';
import { Subject, takeUntil, map, take } from 'rxjs';

@Component({
  selector: 'app-open-product',
  templateUrl: './open-product.component.html',
  styleUrls: ['./open-product.component.scss'],
  standalone: false
})
export class OpenProductComponent implements OnInit, OnDestroy {
  public product?: ProductInterface | any;
  public isLoading: boolean = true;
  public error?: string;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
      private route: ActivatedRoute,
      private productService: ProductService
  ) {}

  public ngOnInit(): void {
    this.loadProduct();
  }

  private loadProduct(): void {
    const idStr: string | null = this.route.snapshot.paramMap.get('id');
    const id: number = idStr ? Number(idStr) : NaN;

    if (isNaN(id)) {
      this.error = 'Invalid product ID';
      this.isLoading = false;
      return;
    }

    this.productService.getProducts()
        .pipe(
            take(1),
            map((list: ProductInterface[]) => list.find(p => Number(p.id) === id)),
            takeUntil(this.destroy$)
        )
        .subscribe({
          next: (found?: ProductInterface) => {
            if (!found) {
              this.error = `Product #${id} not found`;
            } else {
              this.product = found;
            }
            this.isLoading = false;
          },
          error: (err: any) => {
            console.error('Greška u učitavanju proizvoda', err);
            this.isLoading = false;
          }
        });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
