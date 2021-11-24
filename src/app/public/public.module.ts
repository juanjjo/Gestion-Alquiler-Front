import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        PublicRoutingModule,
        FormsModule,
        ReactiveFormsModule,
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
