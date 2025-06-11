import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { SliderComponent } from './index/slider/slider.component';
import { BrandPromoComponent } from './brand-promo/brand-promo.component';
import { ProductsModule } from '../../products/products.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        IndexComponent,
        SliderComponent,
        BrandPromoComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HomeRoutingModule,
        ProductsModule,
        FormsModule,
        SharedModule
    ],
    exports: []
})
export class HomeModule {}