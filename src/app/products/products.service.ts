import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, map, delay} from 'rxjs';
import {Product} from "../interfaces/product";

@Injectable({ providedIn: 'root' })
export class ProductService {
    private url = 'http://localhost:3000/products';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http
            .get<{ products: Product[] }>(this.url)
            .pipe(
                delay(2000),
                map(({ products }) =>
                    products.map(p => {
                        const mainImage =
                            p.mainImage && !p.mainImage.toString().startsWith('/')
                                ? `/${p.mainImage}`
                                : p.mainImage;

                        const discount = parseFloat(
                            p.discount?.toString().replace(/[^\d.]/g, '') ?? '0'
                        );
                        const oldPrice = parseFloat(
                            p.price.old?.toString().replace(/[^\d.]/g, '') ?? '0'
                        );

                        const newPrice = !isNaN(discount) && !isNaN(oldPrice)
                            ? (oldPrice - (oldPrice * discount) / 100).toFixed(2)
                            : oldPrice.toFixed(2);

                        return {
                            ...p,
                            mainImage,
                            price: { ...p.price, new: newPrice }
                        };
                    })
                )
            );
    }
}
