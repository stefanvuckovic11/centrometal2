import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
      ProductListComponent
  ],
  exports: [
  ]
})
export class ProductsModule {}

