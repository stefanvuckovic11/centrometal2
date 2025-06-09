import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { OpenProductRoutingModule } from './open-product-routing.module';
import { OpenProductComponent } from './open-product.component';
import { OpenProductAdditionalComponent } from './open-product-additional/open-product-additional.component';
import { OpenProductGalleryComponent } from './open-product-gallery/open-product-gallery.component';
import { OpenProductInfoComponent } from './open-product-info/open-product-info.component';
import { OpenProductSimilarComponent } from './open-product-similar/open-product-similar.component';
import { VideoBoxComponent } from './video-box/video-box.component';
import { OpenProductBreadcrumbComponent } from './open-product-breadcrumb/open-product-breadcrumb.component';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        SharedModule, // Provides NewsletterComponent
        OpenProductRoutingModule,
        OpenProductComponent,
        OpenProductAdditionalComponent,
        OpenProductInfoComponent,
        OpenProductSimilarComponent,
        OpenProductGalleryComponent,
        OpenProductBreadcrumbComponent,
        VideoBoxComponent,
        // Import standalone component
    ],
    exports: [
        OpenProductComponent // Export if needed by other modules
    ]
})
export class OpenProductModule {}