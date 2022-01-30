import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        NgbModule,
    ],
    declarations: [

    ]
})
export class AdminModule { }
