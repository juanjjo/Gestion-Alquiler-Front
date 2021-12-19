import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'app-public',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  hideSidebar: boolean = true;
 html:any;
 width:any;
  constructor(private spinner: NgxSpinnerService,
    private layoutService: LayoutService,private elementRef:ElementRef
  ) {
     // On toggle sidebar menu
     layoutService.toggleSidebar$.subscribe(

      isShow => {
        this.hideSidebar = isShow;
        console.log("isShow" + " " + isShow);
        console.log("entro layout" + " " + this.hideSidebar);
        if(this.hideSidebar==true){
          this.html.classList.add("backgound");
          this.html.addEventListener('click',this.toogleOverlaySide.bind(this));
        }else{
          this.html.classList.remove("backgound");
        }
      });
   }

  ngOnInit(): void {
    this.html=document.getElementsByClassName("contenido")[0];
  }

  toogleOverlaySide(event) {
    if(this.hideSidebar==true){
      console.log("entro a click");
      this.html.classList.remove("backgound");
      this.hideSidebar=false;
      this.layoutService.toggleSidebarSmallScreen(this.hideSidebar);
    }
  }

  // @HostListener("window:resize")
  // resize(){
  //   this.width = window.screen.width;
  //   if(this.width>=960)
  // }
}
