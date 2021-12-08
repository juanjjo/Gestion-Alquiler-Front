import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
