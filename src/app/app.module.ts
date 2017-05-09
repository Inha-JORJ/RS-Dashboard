import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import * as Material from '@angular/material';
import {UserComponent} from './user/user.component';
import {ProductComponent} from './product/product.component';
import {CategoryComponent} from './category/category.component';
import {UserService} from './services/user.service';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthenticationService} from './services/authentication.service';
import {AlertService} from './services/alert.service';
import {LoginComponent} from './user/login/login.component';
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    CategoryComponent,
    NotFoundComponent ,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routing,

    Material.MdSidenavModule,
    Material.MdButtonModule,
    Material.MdInputModule,
    Material.MdGridListModule,
  ],
  providers: [UserComponent, UserService, AuthenticationService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
