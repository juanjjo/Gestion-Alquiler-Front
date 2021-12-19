import {
  Component,
  ElementRef,
  HostListener,
  NgZone,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.css'],
})
export class MenuVerticalComponent implements OnInit {
  toogleSidebar: boolean = true;
  hideSidebar: boolean;
  resize:any;

  @ViewChild('MenuVertical') public menuVetical: ElementRef;

  constructor(
    private layoutService: LayoutService,
    private renderer: Renderer2,
    private ngZone:NgZone
  ) {
    this.resize = window.innerWidth
    console.log(this.resize);
    window.onresize = (e) =>
    {
        //ngZone.run will help to run change detection
        this.ngZone.run(() => {
          const prueba = document.getElementsByClassName("xx")[0];
            this.resize=window.innerWidth;
            console.log(this.resize);
            if (this.resize>=992) {
              this.hideSidebar=false;
              this.layoutService.toggleSidebarSmallScreen(this.hideSidebar);
            }
        });
    };

    this.layoutService.toggleSidebar$.subscribe((isShow) => {
      const prueba = document.getElementsByClassName("xx")[0];
      const menuContent = document.getElementsByClassName("mm")[0];
      this.hideSidebar = isShow;
      console.log("entro");
      if (this.hideSidebar==false || this.resize>=992) {
        prueba.classList.remove("wrapper-open");

      } else {
        prueba.classList.add("wrapper-open");
      }
    });
  }


  ngOnInit(): void {

  }



}
