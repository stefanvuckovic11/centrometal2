import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProductCardComponent
  ]
})
export class ProductsModule {}
