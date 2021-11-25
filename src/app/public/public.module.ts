import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
    imports: [
        CommonModule,
        PublicRoutingModule
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
