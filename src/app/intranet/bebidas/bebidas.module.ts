import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BebidasRoutingModule } from './bebidas-routing.module';
import { BebidasComponent } from './bebidas.component';



@NgModule({
  imports: [
    CommonModule,
    BebidasRoutingModule
  ],
  declarations: [
    BebidasComponent
  ],

})
export class BebidasModule { }
