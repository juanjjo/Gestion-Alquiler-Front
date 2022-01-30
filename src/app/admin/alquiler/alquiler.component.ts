import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { AlquilerService } from './services/alquiler.service';


@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent {
  token: string;
  currentUser: string;
  l
  @ViewChild(DatatableComponent) table: DatatableComponent;
  // row data
  rows:any;
  public limitRef = 10;
  public URL:string="devschoolcloud.com/sa/#/";
  // private
  private tempData = [];
  public ColumnMode = ColumnMode;

  constructor(private alquilerService: AlquilerService) {

  }
  ngOnInit(): void {
    this.alquilerService.getListCoporativos().subscribe(
      (result)=>{
        this.rows = result;
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
