import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { provideHttpClient }     from '@angular/common/http';

import { AppRoutingModule }      from './app-routing.module';
import { AppComponent }          from './app.component';
import { SharedModule }          from './shared/shared.module';
import { AuthModule }            from './pages/auth/auth.module';
import { ProductsModule }        from './products/products.module';
import {SeeAllModule} from "./pages/see-all/see-all.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    ProductsModule,
      SeeAllModule,
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
