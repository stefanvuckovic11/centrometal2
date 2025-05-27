import { NgModule }          from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule }      from '@angular/router';

import { OpenProductComponent }          from './open-product.component';
import { OpenProductBreadcrumbComponent } from './open-product-breadcrumb/open-product-breadcrumb.component';
import { OpenProductGalleryComponent } from './open-product-gallery/open-product-gallery.component';
import {HomeModule} from "../home/home.module";
import { OpenProductInfoComponent } from './open-product-info/open-product-info.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        OpenProductComponent,
        OpenProductBreadcrumbComponent,
        OpenProductGalleryComponent,
        OpenProductInfoComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgOptimizedImage,
        HomeModule,
        FormsModule
    ],
    exports: [
        OpenProductComponent
    ]
})
export class OpenProductModule {}
