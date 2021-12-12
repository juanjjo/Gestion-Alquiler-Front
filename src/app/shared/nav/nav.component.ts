import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  toggleClass = "fas fa-expand";
  hideSidebar: boolean = true;
  isCollapsed: boolean = true;

  constructor(private layoutService: LayoutService,
    @Inject(DOCUMENT) private document: Document,private renderer: Renderer2) {

    layoutService.toggleSidebar$.subscribe(
      isShow => {
        this.hideSidebar = !isShow;
      });
  }

  ngOnInit() {
    console.log(this.isCollapsed);
  }


  ToggleClass() {
    if (this.toggleClass === "fas fa-expand") {
      this.toggleClass = "fas fa-compress";
    } else {
      this.toggleClass = "fas fa-expand";
    }
  }
  toggleSidebar(){
    this.layoutService.toggleSidebarSmallScreen(this.hideSidebar);
    // const html = document.getElementsByTagName("app-menu-vertical")[1];
    // html.classList.remove("wrapper");
    console.log(this.hideSidebar);
  }
}
