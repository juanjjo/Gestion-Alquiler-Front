import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlquilerComponent } from './alquiler.component';
import { AlquilerRoutingModule } from './alquiler-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AlquilerRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AlquilerComponent]
})
export class AlquilerModule { }
