import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, map, delay} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private http: HttpClient) {}


    getProducts(): Observable<any[]> {
        return this.http
            .get<{ products: any[] }>('http://localhost:3000/products')
            .pipe(
                delay(2000),
                map(body => body.products),
                map(list =>
                    list.map(p => {
                        if (p.mainImage && !p.mainImage.startsWith('/')) {
                            p.mainImage = '/' + p.mainImage;
                        }
                        const discount = parseFloat(
                            p.discount?.toString().replace(/[^\d.]/g, '') || '0'
                        );
                        const oldPrice = parseFloat(
                            p.price?.old?.toString().replace(/[^\d.]/g, '') || '0'
                        );
                        p.price.new = !isNaN(discount) && !isNaN(oldPrice)
                            ? (oldPrice - (oldPrice * discount) / 100).toFixed(2)
                            : oldPrice.toFixed(2);
                        return p;
                    })
                )
            );
    }
}
