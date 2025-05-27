import { NgModule }          from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule }      from '@angular/router';

import { OpenProductComponent }          from './open-product.component';
import { OpenProductBreadcrumbComponent } from './open-product-breadcrumb/open-product-breadcrumb.component';
import { OpenProductGalleryComponent } from './open-product-gallery/open-product-gallery.component';
import {HomeModule} from "../home/home.module";

@NgModule({
    declarations: [
        OpenProductComponent,
        OpenProductBreadcrumbComponent,
        OpenProductGalleryComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgOptimizedImage,
        HomeModule
    ],
    exports: [
        OpenProductComponent
    ]
})
export class OpenProductModule {}
