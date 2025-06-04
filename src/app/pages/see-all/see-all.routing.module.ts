import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeAllComponent } from './see-all.component';

const routes: Routes = [
    { path: ':category', component: SeeAllComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SeeAllRoutingModule {}
