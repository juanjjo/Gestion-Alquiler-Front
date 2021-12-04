import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeComponent } from './home/home.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
    ],
    declarations: [
      HomeComponent
    ]
})
export class AdminModule { }
