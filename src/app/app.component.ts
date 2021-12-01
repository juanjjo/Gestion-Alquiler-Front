import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private spinner: NgxSpinnerService) {}
  ngOnInit() {
    /** spinner starts on init */

  }

  title = 'gestion-alquiler-front';
}
