import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenProductComponent } from './open-product.component';

const routes: Routes = [
    { path: ':id', component: OpenProductComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OpenProductRoutingModule {}