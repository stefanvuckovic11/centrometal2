import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { provideHttpClient }     from '@angular/common/http';
import { RouterModule }          from '@angular/router';
import { CommonModule }          from '@angular/common';

import { AppRoutingModule }      from './app-routing.module';
import { AppComponent }          from './app.component';
import { SharedModule }          from './shared/shared.module';
import { AuthModule }            from './pages/auth/auth.module';
import { ProductsModule }        from './products/products.module';
import { SeeAllModule }          from './pages/see-all/see-all.module';
import {OpenProductModule} from "./pages/open-product/open-product.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    ProductsModule,
    SeeAllModule,
    OpenProductModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
