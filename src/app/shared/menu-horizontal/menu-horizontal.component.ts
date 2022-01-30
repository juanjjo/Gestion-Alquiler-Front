import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-horizontal',
  templateUrl: './menu-horizontal.component.html',
  styleUrls: ['./menu-horizontal.component.css']
})
export class MenuHorizontalComponent implements OnInit {
  aux:any="http://localhost:4200";
  constructor() { }

  ngOnInit(): void {

  }

  isActive(viewLocation:any){
    let actual:any;
    actual = window.location.href;
    viewLocation = this.aux+viewLocation;
    console.log(actual);
    console.log(viewLocation);
    if(viewLocation==actual){
      return true;
    }
    return false;
  }
}
