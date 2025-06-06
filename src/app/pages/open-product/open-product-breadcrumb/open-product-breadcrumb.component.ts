import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-open-product-breadcrumb',
  standalone: false,
  templateUrl: './open-product-breadcrumb.component.html',
  styleUrls: ['./open-product-breadcrumb.component.scss']
})
export class OpenProductBreadcrumbComponent {
  @Input() product: any = null;
}
