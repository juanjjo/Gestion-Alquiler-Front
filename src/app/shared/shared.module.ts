import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuVerticalComponent } from './menu-vertical/menu-vertical.component';
import { FooterComponent } from './footer/footer.component';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    MenuHorizontalComponent,
    MenuVerticalComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    RouterModule,
    CommonModule,

  ],
  exports:[
    NavComponent,
    MenuVerticalComponent,
    MenuHorizontalComponent,
    FooterComponent,
  ]
})
export class SharedModule {
  constructor(){}
}
