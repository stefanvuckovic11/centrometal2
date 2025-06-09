import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-open-product-breadcrumb',
    templateUrl: './open-product-breadcrumb.component.html',
    standalone: false,
    styleUrls: ['./open-product-breadcrumb.component.scss']
})
export class OpenProductBreadcrumbComponent {
  @Input() product: any = null;
}
