import { NgModule }              from '@angular/core';
import { SharedModule }          from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent }  from './product-list/product-list.component';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {}
