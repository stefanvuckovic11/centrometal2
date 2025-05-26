import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
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
        RouterModule
    ],
    exports: [
        OpenProductComponent
    ]
})
export class OpenProductModule {}
