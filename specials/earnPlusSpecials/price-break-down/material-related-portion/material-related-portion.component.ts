import { Component, OnInit, Input } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Column } from 'src/app/shared/model/grid-column.model';
import { PipingMTOService } from 'src/app/shared/services/piping/piping-mto.service';

@Component({
  selector: 'app-material-related-portion',
  templateUrl: './material-related-portion.component.html',
  styleUrls: ['./material-related-portion.component.scss']
})
export class MaterialRelatedPortionComponent implements OnInit {
  @Input('materialResult') rowData: any;
  columnDefs: any;
  defaultColDef: any;
  enableBtn: any;
  gridApi: any;
  params: any;
  context: any;
  type: any = '';
  displayedRowCount: any;
  public gridOptions: GridOptions;
  firstRow: any;
  originalRowData: any;
  firstRowParams = {
    'name': '',
    'remark': '',
    'heading':''
  };

  constructor(private pipingService: PipingMTOService) {
    this.columnDefs = [
      // new Column('Id', 'id', null, true, true, false, 100, 'ID', null, null, null, true, null, null,false),
      new Column('System', 'name', null, true, true, false, 100, 'System', null, null, null, true, null, null, false),
      new Column('Total Weight', 'totalWeight', null, true, true, false, 50, 'Total Weight', null, null, null, true, null, null, false, this.commonColor()),
      new Column('Total Price Material Supply', 'totalPriceMaterialSupply', null, true, true, false, 50, 'Total Price Material Supply', null, null, null, true, null, null, false, this.commonColor()),
      new Column('Total Price Pre Fabrication', 'totalPricePrefabrication', null, true, true, false, 50, 'Total Price Pre Fabrication', null, null, null, true, null, null, false, this.commonColor()),
      new Column('Total Price Assembly', 'totalPriceAssembly', null, true, true, false, 50, 'Total Price Assembly', null, null, null, true, null, null, false, this.commonColor()),
      new Column('Total Price Erection', 'totalPriceErection', null, true, true, false, 50, 'Total Price Erection', null, null, null, true, null, null, false, this.commonColor()),
      new Column('Grand Total', 'grandTotal', null, true, true, false, 50, 'Grand Total', null, null, null, true, null, null, false),
      new Column('Remarks', 'remark', null, true, true, true, 100, 'Remarks', null, null, null, true, null, null, false),
    ]

    this.gridOptions = {
      columnDefs: this.columnDefs,
      defaultColDef: this.defaultColDef,
      getRowStyle: function (params) {
        if ((params.data.name.toUpperCase().indexOf("TOTAL COST") !== -1)) {
          return { 'font': 'bold 18px Georgia;' };
        }
      }
    };

    this.context = { componentParent: this };
  }

  ngOnInit() {
    this.originalRowData = this.rowData.slice();
    /**
     * First row
     */
    this.firstRow = this.originalRowData.filter((val) => (!val.totalPriceAssembly && !val.totalPriceErection && !val.totalPriceMaterialSupply && !val.totalPricePrefabrication && !val.totalWeight))

    this.firstRowParams.heading = this.firstRow[0].name.split(' ')[0];
    this.firstRowParams.name = this.firstRow[0].name;
    this.firstRowParams.remark = this.firstRow[0].remark;

    /**
     * Remove the first row from the rowdata to display
     */
    this.rowData = this.rowData.filter((val) => val.id != this.firstRow[0].id)
    this.rowData = this.pipingService.totalRowsAtLast(this.rowData, 'name');

  }

  commonColor() {
    return { 'background-color': '#b3d9ff' };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.params = params;
    this.displayedRowCount = this.gridApi.getDisplayedRowCount();
    this.gridApi.sizeColumnsToFit();
  }
}
