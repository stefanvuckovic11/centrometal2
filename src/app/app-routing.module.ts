import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
        import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
        import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'products',
    loadChildren: () =>
        import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'see-all/:category',
    loadComponent: () =>
        import('./pages/see-all/see-all.component').then(m => m.SeeAllComponent)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}