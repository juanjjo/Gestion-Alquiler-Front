import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
    imports: [
        CommonModule,
        PublicRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        // FormsModule ,
        // ReactiveFormsModule,
        // NgbModule,
        // NgxSpinnerModule
    ],
    declarations: [
      LoginComponent,
    ]
})
export class PublicModule { }
