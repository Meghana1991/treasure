import { Component, OnInit, Input } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { Column } from 'src/app/shared/model/grid-column.model';
import { PipingMTOService } from 'src/app/shared/services/piping/piping-mto.service';

@Component({
  selector: 'app-price-break-down-list',
  templateUrl: './price-break-down-list.component.html',
  styleUrls: ['./price-break-down-list.component.scss']
})
export class PriceBreakDownListComponent implements OnInit {

  columnDefs: any;
  defaultColDef: any;
  enableBtn: any;
  gridApi: any;
  params: any;
  context: any;
  type: any = '';
  some: any;
  firstRow: any;
  subRow: any;
  lastRow: any;
  originalRowData: any;
  firstRowParams = {
    'costSectionTitle': '',
    'sectionTitle': '',
    'remark': '',
    'subSectionTitle': ''
  };
  displayedRowCount: any;
  frameworkComponents: any;
  totalCost: any;

  @Input('rowData') rowData: any;
  public gridOptions: GridOptions;
  public progressLoad: any = false;

  public formInfo = {
    type: "Create"
  }

  constructor(private alertService: AlertService, private pipingService: PipingMTOService) {
    this.columnDefs = [
      new Column('', 'costSectionTitle', null, true, true, true, 400, '', null, null, null, true, null, null, false),
      new Column('', 'currency', null, true, true, false, 100, '', null, null, null, true, null, null, false),
      new Column('', 'cost', null, true, true, true, 100, '', null, null, null, true, null, null, false,
        function (params) {
          if ((params.data.costSectionTitle.toUpperCase().indexOf("TOTAL COST") !== -1)) {
            return {
              'pointer-events': 'none',
              'background-color': '#E2E2E2'
            }
          } else if (params.data.sectionTitle == '3' || params.data.sectionTitle == '3.0') {
            return {
              'pointer-events': 'none',
              'background-color': 'yellow'
            }
          } else {
            return {
              'background-color': 'yellow'
            }
          }
        }),
      new Column('', 'remark', null, true, true, true, 400, '', null, null, null, true, null, null, false),
    ]

    this.defaultColDef = {
      enableValue: true,
    };

    this.gridOptions = {
      columnDefs: this.columnDefs,
      defaultColDef: this.defaultColDef,
      headerHeight: 4,
      suppressHorizontalScroll: true,
      getRowStyle: function (params) {
        if ((params.data.costSectionTitle.toUpperCase().indexOf("TOTAL COST") !== -1)) {
          return { 'font': 'bold 18px Georgia;' };
        }
      }
    };

    this.context = { componentParent: this };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.params = params;
    this.displayedRowCount = this.gridApi.getDisplayedRowCount();
    this.gridApi.sizeColumnsToFit();
  }

  onCellValueChanged(data: any) {
    if (data.colDef.field == 'cost') {
      let newValue = parseInt(data.newValue);
      if (newValue != data.oldValue) {
        if (!isNaN(newValue)) {
          if (newValue > data.oldValue) {
            this.totalCost += (newValue - data.oldValue);
          } else if (newValue < data.oldValue) {
            this.totalCost -= (data.oldValue - newValue);
          }
          this.pipingService.setTotalCost(this.totalCost, data.data.sectionTitle);
        } else {
          this.alertService.error('Enter A Number')
          setTimeout(() => { this.alertService.clear(); }, 3000);
          this.rowData[data.rowIndex].cost = data.oldValue;
        }
        let lastRowIndex = this.rowData.findIndex((obj => obj.id == this.lastRow[0].id));
        this.rowData[lastRowIndex].cost = parseInt(this.totalCost);
        this.gridApi.refreshCells();
      }
    }
  }

  ngOnInit() {
    this.originalRowData = this.rowData.slice();

    /**
     * First and Last row
     */
    this.firstRow = this.originalRowData.filter((val) => (!val.currency && !val.cost && val.remark))
    this.subRow = this.originalRowData.filter((val) => (!val.currency && !val.cost && !val.remark))
    this.lastRow = this.originalRowData.filter((val) => (val.costSectionTitle.toUpperCase().indexOf("TOTAL COST") !== -1))

    if (this.firstRow.length > 1) {
      this.alertService.error("There is duplicate Title record with empty currency and cost")
      setTimeout(() => { this.alertService.clear(); }, 5000);
    }

    this.firstRowParams = {
      'costSectionTitle': this.firstRow[0].costSectionTitle,
      'sectionTitle': this.firstRow[0].sectionTitle,
      'remark': this.firstRow[0].remark,
      'subSectionTitle': (this.subRow && this.subRow.length) ? (this.subRow[0].costSectionTitle) : ''
    };

    (this.lastRow.length <= 1) ? (this.totalCost = this.lastRow[0].cost) : ''

    /**
     * Remove the first row and (Sub row if any) from the rowdata to display
     */
    if (this.subRow && this.subRow.length) {
      this.rowData = this.rowData.filter((val) => ((val.id != this.firstRow[0].id) && (val.id != this.subRow[0].id)))
    } else {
      this.rowData = this.rowData.filter((val) => val.id != this.firstRow[0].id)
    }

    this.pipingService.total_cost_trigger$.subscribe((totalCost) => {
      this.updateTotalCostOnChange(this.rowData, totalCost)
    })
    this.rowData = this.pipingService.totalRowsAtLast(this.rowData, 'costSectionTitle');
  }

  updateTotalCostOnChange(data, totalCost) {
    /**
     * Only for 1.1 which updates with changes in other section
     */
    if (this.lastRow.length > 1) {
      data.forEach((val) => {
        if ((val.costSectionTitle.toUpperCase().indexOf('TOTAL COST') != -1) && val.costSectionTitle.toUpperCase().indexOf('GRAND TOTAL COST') == -1) {
          /**
           * Total Cost of sections in 1.1
           */
          let lastPart = val.costSectionTitle.split(' ').pop();
          if (totalCost[lastPart]) {
            val.cost = totalCost[lastPart];
            this.gridApi.refreshCells();
          }
        }
        else if (val.costSectionTitle.toUpperCase().indexOf('GRAND TOTAL COST') != -1) {
          /**
           * Grand Total Cost of sections in 1.1
           */
          let total_of_sections = 0;
          data.forEach((val) => {
            if ((val.costSectionTitle.toUpperCase().indexOf('TOTAL COST') != -1) && val.costSectionTitle.toUpperCase().indexOf('GRAND TOTAL COST') == -1) {
              total_of_sections += val.cost
            }
          })
          val.cost = total_of_sections
          this.gridApi.refreshCells();
        }
      });
    }
  }
}