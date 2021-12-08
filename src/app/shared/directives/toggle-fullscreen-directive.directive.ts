import { Directive, HostListener } from '@angular/core';
import * as screenfull from 'screenfull';
@Directive({
  selector: '[appToggleFullscreenDirective]'
})
export class ToggleFullscreenDirectiveDirective {

  constructor() { }

  @HostListener('click') onClick() {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
}
