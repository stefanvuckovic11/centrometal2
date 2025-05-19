import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from '../global/product-card/product-card.component';
import {SeeAllComponent} from "../pages/see-all/see-all.component";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
      SeeAllComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ],

  exports: [
    ProductListComponent,
    ProductCardComponent,
      SeeAllComponent
  ]
})
export class ProductsModule {}
