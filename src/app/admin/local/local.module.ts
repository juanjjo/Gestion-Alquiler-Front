import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalComponent } from './local.component';
import { LocalRoutingModule } from './local-routing.module';
@NgModule({
  imports: [
    CommonModule,
    LocalRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LocalComponent]
})
export class LocalModule { }
