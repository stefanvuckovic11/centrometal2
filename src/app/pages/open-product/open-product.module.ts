import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OpenProductComponent } from './open-product.component';
import { OpenProductGalleryComponent } from './open-product-gallery/open-product-gallery.component';
import { OpenProductInfoComponent } from './open-product-info/open-product-info.component';
import { VideoBoxComponent } from './video-box/video-box.component';
import { OpenProductAdditionalComponent } from './open-product-additional/open-product-additional.component';
import {SharedModule} from "../../shared/shared.module";
import {OpenProductBreadcrumbComponent} from "./open-product-breadcrumb/open-product-breadcrumb.component";
import {FormsModule} from "@angular/forms";
import {HomeModule} from "../home/home.module";

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
        OpenProductComponent
    ]
})
export class OpenProductModule {}
