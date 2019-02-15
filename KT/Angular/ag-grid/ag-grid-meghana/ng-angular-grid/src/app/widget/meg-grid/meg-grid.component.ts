import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meg-grid',
  templateUrl: './meg-grid.component.html',
  styleUrls: ['./meg-grid.component.css']
})
export class MegGridComponent implements OnInit {

  public rowData: any;

  columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true, checkboxSelection: true },
    { headerName: 'Profession', field: 'prof', sortable: true, filter: true }
  ]

  @ViewChild('agGrid') agGrid: AgGridNg2;

  constructor(private http: HttpClient) {

  }
  /**
    rowData = [
      { name: 'SaiShree', prof: 'Lehrer' },
      { name: 'Manju', prof: 'Arzt' }
    ]
  */

  //The above data is available in https://api.myjson.com/bins/w9zu6
  ngOnInit() {
    this.http.get('https://api.myjson.com/bins/w9zu6').subscribe(
      (data) => {
        this.rowData = data;
      }
    )
  }

  getSelectedRows() {
    // console.log(this.agGrid.api.getSelectedNodes());
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    console.log(selectedNodes.map(nodes => nodes.data));

    //or

    const selectedRows = this.agGrid.api.getSelectedRows();
    console.log(selectedRows)
  }

  onCellClicked(event) {
    console.log('Row Clicked - ', event.rowIndex, 'Column name -', event.colDef.field)
  }

}
