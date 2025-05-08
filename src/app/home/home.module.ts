import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule }         from '@angular/router';

import { HomeRoutingModule }    from './home-routing.module';
import { IndexComponent }       from './index/index.component';
import { AccordionComponent }   from './index/accordion/accordion.component';
import { SliderComponent }      from './index/slider/slider.component';

import { ProductsModule }       from '../products/products.module';

@NgModule({
  declarations: [
    IndexComponent,
    AccordionComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    ProductsModule
  ]
})
export class HomeModule {}
