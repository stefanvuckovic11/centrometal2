import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { OpenProductComponent } from '../pages/open-product/open-product.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: ':id', component: OpenProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
