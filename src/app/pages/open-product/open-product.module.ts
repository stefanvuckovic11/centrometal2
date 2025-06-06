import { NgModule }          from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule }      from '@angular/router';

import { OpenProductComponent }          from './open-product.component';
import { OpenProductBreadcrumbComponent } from './open-product-breadcrumb/open-product-breadcrumb.component';
import { OpenProductGalleryComponent } from './open-product-gallery/open-product-gallery.component';
import {HomeModule} from "../home/home.module";
import { OpenProductInfoComponent } from './open-product-info/open-product-info.component';
import {FormsModule} from "@angular/forms";
import { VideoBoxComponent } from './video-box/video-box.component';
import { OpenProductAdditionalComponent } from './open-product-additional/open-product-additional.component';
import { OpenProductSimilarComponent } from './open-product-similar/open-product-similar.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        OpenProductBreadcrumbComponent,
        OpenProductGalleryComponent,
        OpenProductInfoComponent,
        VideoBoxComponent,
        OpenProductAdditionalComponent,
        OpenProductSimilarComponent,
        OpenProductComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgOptimizedImage,
        HomeModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        VideoBoxComponent,
        OpenProductAdditionalComponent,
        OpenProductSimilarComponent
    ]
})
export class OpenProductModule {}
