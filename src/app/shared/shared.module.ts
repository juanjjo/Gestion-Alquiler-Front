import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuVerticalComponent } from './menu-vertical/menu-vertical.component';
import { FooterComponent } from './footer/footer.component';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ToggleFullscreenDirective} from './directives/toggle-fullscreen-directive';

@NgModule({
  exports:[
    NavComponent,
    MenuVerticalComponent,
    MenuHorizontalComponent,
    FooterComponent,
  ],
  declarations: [
    MenuHorizontalComponent,
    MenuVerticalComponent,
    FooterComponent,
    NavComponent,
    ToggleFullscreenDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule {
}
