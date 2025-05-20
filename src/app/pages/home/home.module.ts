import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule }         from '@angular/router';

import { HomeRoutingModule }    from './home-routing.module';
import { IndexComponent }       from './index/index.component';
import { AccordionComponent }   from './index/accordion/accordion.component';
import { SliderComponent }      from './index/slider/slider.component';

import { ProductsModule }       from '../../products/products.module';
import { BrandPromoComponent } from './brand-promo/brand-promo.component';
import { BrandSearchComponent } from './brand-search/brand-search.component';
import {FormsModule} from "@angular/forms";
import { NewsletterComponent } from './newsletter/newsletter.component';
import { KitPromoComponent } from './kit-promo/kit-promo.component';

@NgModule({
    declarations: [
        IndexComponent,
        AccordionComponent,
        SliderComponent,
        BrandPromoComponent,
        BrandSearchComponent,
        NewsletterComponent,
        KitPromoComponent
    ],
    exports: [
        AccordionComponent,
        BrandSearchComponent,
        KitPromoComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HomeRoutingModule,
        ProductsModule,
        FormsModule
    ]
})
export class HomeModule {}
