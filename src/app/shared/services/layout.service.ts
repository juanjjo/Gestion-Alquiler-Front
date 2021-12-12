import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private toggleSidebar = new Subject<boolean>(); // small screen

  toggleSidebar$ = this.toggleSidebar.asObservable();


  toggleSidebarSmallScreen(toggle: boolean) {
    this.toggleSidebar.next(toggle);
  }
}
