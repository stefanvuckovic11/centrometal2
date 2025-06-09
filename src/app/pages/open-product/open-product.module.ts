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
import { OpenProductBreadcrumbComponent } from './open-product-breadcrumb/open-product-breadcrumb.component';

const routes: Routes = [
    { path: ':id', component: OpenProductComponent }
];

@NgModule({
    declarations: [
        OpenProductComponent,
        OpenProductAdditionalComponent,
        OpenProductGalleryComponent,
        OpenProductInfoComponent,
        OpenProductSimilarComponent,
        OpenProductBreadcrumbComponent,
        VideoBoxComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        OpenProductComponent
    ]
})
export class OpenProductModule {}
