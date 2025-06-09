import { Component, Input } from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-open-product-breadcrumb',
    templateUrl: './open-product-breadcrumb.component.html',
    imports: [
        RouterLink,
        NgIf
    ],
    styleUrls: ['./open-product-breadcrumb.component.scss']
})
export class OpenProductBreadcrumbComponent {
  @Input() product: any = null;
}
