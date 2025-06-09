import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../products/products.service';
import { ProductInterface } from '../../interfaces/product.interface';
import { Subject, takeUntil, switchMap, take, of } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';
import { OpenProductBreadcrumbComponent } from './open-product-breadcrumb/open-product-breadcrumb.component';
import { OpenProductGalleryComponent } from './open-product-gallery/open-product-gallery.component';
import { OpenProductInfoComponent } from './open-product-info/open-product-info.component';
import { OpenProductAdditionalComponent } from './open-product-additional/open-product-additional.component';
import { OpenProductSimilarComponent } from './open-product-similar/open-product-similar.component';
import { VideoBoxComponent } from './video-box/video-box.component';

@Component({
    selector: 'app-open-product',
    standalone: true,
    imports: [
        CommonModule,
        SharedModule,
        OpenProductBreadcrumbComponent,
        OpenProductGalleryComponent,
        OpenProductInfoComponent,
        OpenProductAdditionalComponent,
        OpenProductSimilarComponent,
        VideoBoxComponent
    ],
    templateUrl: './open-product.component.html',
    styleUrls: ['./open-product.component.scss']
})
export class OpenProductComponent implements OnInit, OnDestroy {
    public product?: ProductInterface;
    public isLoading = true;
    public error?: string;

    private destroy$ = new Subject<void>();

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
    ) {}

    ngOnInit(): void {
        this.loadProduct();
    }

    private loadProduct(): void {
        const idStr = this.route.snapshot.paramMap.get('id');
        const id = idStr ? Number(idStr) : NaN;

        if (isNaN(id)) {
            this.error = 'Invalid product ID';
            this.isLoading = false;
            return;
        }

        this.productService.getProducts()
            .pipe(
                take(1),
                switchMap((allProducts: ProductInterface[]) => {
                    const found = allProducts.find(p => Number(p.id) === id);
                    if (!found) {
                        throw new Error(`Product #${id} not found`);
                    }

                    const similar = allProducts
                        .filter(p => p.type === found.type && Number(p.id) !== id)
                        .slice(0, 4);

                    found.similarProducts = similar;
                    found.similarConfig = {
                        headerText: 'Slični proizvodi',
                        footerButtonText: 'Pogledaj sve',
                        buttonBorderColor: '#ccc'
                    };

                    return of(found);
                }),
                takeUntil(this.destroy$)
            )
            .subscribe({
                next: (found) => {
                    this.product = found;
                    this.isLoading = false;
                },
                error: (err) => {
                    console.error('Greška u učitavanju proizvoda', err);
                    this.error = (err as Error).message || 'Nešto je pošlo po krivu';
                    this.isLoading = false;
                }
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}