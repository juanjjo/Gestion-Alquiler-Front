import {
  Component,
  ElementRef,
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
  @ViewChild('MenuVertical') public menuVetical: ElementRef;
  constructor(
    private layoutService: LayoutService,
    private renderer: Renderer2
  ) {

    this.layoutService.toggleSidebar$.subscribe((isShow) => {
      const prueba = document.getElementsByClassName("xx")[0];
      console.log(prueba);
      this.hideSidebar = isShow;
      console.log(this.menuVetical);
      if (this.hideSidebar==true) {
        // this.renderer.removeClass(this.menuVetical,'wrapper');
        prueba.classList.remove("wrapper");
        prueba.classList.add("wrapper-open");
      } else {
        prueba.classList.remove("wrapper-open");
        prueba.classList.add("wrapper");
        // prueba.classList.add("wrapper");
        // this.renderer.addClass(this.menuVetical,'wrapper');
      }
    });
  }

  ngOnInit(): void {

  }
}
