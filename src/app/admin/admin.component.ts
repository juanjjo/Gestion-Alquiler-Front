import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LayoutService } from '../shared/services/layout.service';

@Component({
  selector: 'app-public',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  hideSidebar: boolean = true;
  constructor(private spinner: NgxSpinnerService,
    private layoutService: LayoutService
  ) {

     // On toggle sidebar menu
     layoutService.toggleSidebar$.subscribe(
      isShow => {
        this.hideSidebar = !isShow;
      });
   }

  ngOnInit(): void {

  }

}
