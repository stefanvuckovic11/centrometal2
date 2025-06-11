import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { OpenProductComponent } from './open-product.component';
import { OpenProductAdditionalComponent } from './open-product-additional/open-product-additional.component';
import { OpenProductGalleryComponent } from './open-product-gallery/open-product-gallery.component';
import { OpenProductInfoComponent } from './open-product-info/open-product-info.component';
import { OpenProductSimilarComponent } from './open-product-similar/open-product-similar.component';
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
        OpenProductComponent
    ]
})
export class OpenProductModule {}
