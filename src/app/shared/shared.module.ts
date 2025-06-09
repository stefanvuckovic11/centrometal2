import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewsletterComponent } from '../pages/home/newsletter/newsletter.component';
import { AccordionComponent } from '../pages/home/index/accordion/accordion.component';
import { BrandSearchComponent } from '../pages/home/brand-search/brand-search.component';
import { KitPromoComponent } from '../pages/home/kit-promo/kit-promo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from '../global/product-card/product-card.component';

@NgModule({
  declarations: [
    NewsletterComponent,
    AccordionComponent,
    BrandSearchComponent,
    KitPromoComponent,
    NavbarComponent,
    FooterComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgOptimizedImage
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgOptimizedImage,
    NewsletterComponent,
    AccordionComponent,
    BrandSearchComponent,
    KitPromoComponent,
    NavbarComponent,
    FooterComponent,
    ProductCardComponent
  ]
})
export class SharedModule {}
