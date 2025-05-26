import { NgModule }          from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule }      from '@angular/router';

import { OpenProductComponent }          from './open-product.component';
import { OpenProductBreadcrumbComponent } from './open-product-breadcrumb/open-product-breadcrumb.component';

@NgModule({
    declarations: [
        OpenProductComponent,
        OpenProductBreadcrumbComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgOptimizedImage
    ],
    exports: [
        OpenProductComponent
    ]
})
export class OpenProductModule {}
