import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-local-detalle',
  templateUrl: './local-detalle.component.html',
  styleUrls: ['./local-detalle.component.css']
})
export class LocalDetalleComponent implements OnInit {
  active = 1;
  constructor() { }

  ngOnInit() {
  }

}
