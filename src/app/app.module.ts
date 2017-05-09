import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import * as Material from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
