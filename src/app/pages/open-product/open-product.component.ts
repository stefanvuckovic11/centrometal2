import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { ProductService }    from '../../products/products.service';
import { Product }           from '../../interfaces/product';
import { map }               from 'rxjs/operators';

@Component({
  selector: 'app-open-product',
  templateUrl: './open-product.component.html',
  styleUrls: ['./open-product.component.scss'],
  standalone: false
})
export class OpenProductComponent implements OnInit {
  product!: Product;

  constructor(
      private route: ActivatedRoute,
      private productService: ProductService
  ) {}

  ngOnInit() {
    const idStr = this.route.snapshot.paramMap.get('id')!;
    const id = Number(idStr);
    this.productService.getProducts()
        .pipe(map(list => list.find(item => Number(item.id) === id)!))
        .subscribe(p => {
          this.product = p;
        });
  }
}
