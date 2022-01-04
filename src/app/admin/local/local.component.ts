import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { LocalService } from './services/local.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  token: string;
  currentUser: string;
  l
  @ViewChild(DatatableComponent) table: DatatableComponent;
  // row data
  public rows:any;
  public limitRef = 10;
  public URL:string="devschoolcloud.com/sa/#/";
  // private
  private tempData = [];
  public ColumnMode = ColumnMode;
  constructor(private serviceLocal: LocalService) { }

  ngOnInit(): void {
    this.serviceLocal.getListCoporativos().subscribe(
      (result)=>{
        this.rows = result['data'];
        console.log(result);
      }
    )
  }
/**
 * filterUpdate
 *
 * @param event
 */
 filterUpdate(event) {
  const val = event.target.value.toLowerCase();

  // filter our data
  const temp = this.tempData.filter(function (d) {
    return d.Username.toLowerCase().indexOf(val) !== -1 || !val;
  });

  // update the rows
  this.rows = temp;
  // Whenever the filter changes, always go back to the first page
  this.table.offset = 0;
}
/**
* updateLimit
*
* @param limit
*/
updateLimit(limit) {
  this.limitRef = limit.target.value;
}


/**
 * click redireccionar
 */
 direccionDetalle(){
  let location = window.location;
  location.href = 'http://localhost:4200/#/corporativos/detalle';
}

}
