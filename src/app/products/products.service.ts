import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, delay } from 'rxjs';
import { ProductInterface, ProductCategory } from '../interfaces/product.interface';

type RawResponse = ProductInterface[] | { products: ProductInterface[] };

@Injectable({ providedIn: 'root' })
export class ProductService {
    private url: string = 'http://localhost:3000/products';

    constructor(private http: HttpClient) {}

    public getProducts(): Observable<ProductInterface[]> {
        return this.http.get<RawResponse>(this.url).pipe(
            delay(2000),
            map(raw => {
                const list: ProductInterface[] = Array.isArray(raw) ? raw : raw.products;

                return list.map(p => {
                    const mainImage = p.mainImage?.startsWith('/')
                        ? p.mainImage
                        : `/${p.mainImage}`;

                    const discount = parseFloat(p.discount?.replace(/[^\d.]/g, '') ?? '0');
                    const oldPrice = parseFloat(p.price.old?.replace(/[^\d.]/g, '') ?? '0');
                    const newPrice =
                        !isNaN(discount) && !isNaN(oldPrice)
                            ? (oldPrice - (oldPrice * discount) / 100).toFixed(2)
                            : oldPrice.toFixed(2);

                    const category = p.category as ProductCategory;

                    return {
                        ...p,
                        category,
                        mainImage,
                        price: { ...p.price, new: newPrice }
                    };
                });
            })
        );
    }
}
