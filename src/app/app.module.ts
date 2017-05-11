import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import * as Material from '@angular/material';
import {ProductComponent} from './views/product/product.component';
import {CategoryComponent} from './category/category.component';
import {UserService} from './services/user.service';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './views/user/login/login.component';
import {routing} from './app.routing';
import {ProductService} from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    Material.MdSidenavModule,
    Material.MdToolbarModule,
    Material.MdIconModule,
    Material.MdListModule,
    routing,

    Material.MdSidenavModule,
    Material.MdButtonModule,
    Material.MdInputModule,
    Material.MdGridListModule,
  ],
  providers: [UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
