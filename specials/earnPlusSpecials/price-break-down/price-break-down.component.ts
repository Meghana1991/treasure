import { Component, OnInit, QueryList, ViewChild, ViewChildren, Input } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { PipingMTOService } from 'src/app/shared/services/piping/piping-mto.service';
import { PriceBreakDownService } from 'src/app/shared/services/price-breakdown/price-breakdown.service';
import { PriceBreakDownListComponent } from './price-break-down-list/price-break-down-list.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-price-break-down',
  templateUrl: './price-break-down.component.html',
  styleUrls: ['./price-break-down.component.scss']
})

export class PriceBreakDownComponent implements OnInit {
  otherCostResult: any;
  noDataMessage: any = '';
  materialResult: any;
  rowData: any = [];
  groupBySectionTitle = [];
  projectCode: string;
  isTransaction: boolean;
  stageId: number;
  @ViewChildren('children') childComponents: QueryList<PriceBreakDownListComponent>;
  @ViewChild('materialPortionGrid') materialPortionGrid;
  /**
   * Transaction ID from MTO
   */
  @Input('transactionId') transactionId;
  constructor(private pipingServ: PipingMTOService, private ngbModalService: NgbModal,
    private alertService: AlertService, private priceBreakDownService: PriceBreakDownService) { }

  ngOnInit() {
    let response;
    this.projectCode = window.localStorage.getItem('selectedProject');
    if (this.transactionId) {
      /**
       * If the PBD is loaded from MTO
       */
      this.priceBreakDownService.getPriceBreakDownByTransaction(this.projectCode, this.transactionId).subscribe((data) => {
        response = data;
        this.otherCostResult = (response) ? (response.pipingPbdOtherCosts ? (response.pipingPbdOtherCosts) : []) : [];
        this.materialResult = (response) ? (response.pipingPbdMaterialCosts ? (response.pipingPbdMaterialCosts) : []) : [];

        if (this.otherCostResult && this.materialResult) {
          if (!this.otherCostResult.length && this.materialResult.length) {
            this.noDataMessage = 'No Other Cost Data';
          } else if (this.otherCostResult.length && !this.materialResult.length) {
            this.noDataMessage = 'No Material Cost Data';
          } else if (!this.otherCostResult.length && !this.materialResult.length) {
            this.noDataMessage = 'No Material and Other Cost Data';
          } else {
            this.noDataMessage = '';
          }
          this.groupAndSplitData();
        } else {
          this.noDataMessage = 'No Material and Other Cost Data';
        }
      }, (err) => {
        if (err && err.error && err.error.message) {
          this.alertService.error(err.error.message);
        } else {
          this.alertService.error('Error in rendering.');
        }
        setTimeout(() => {
          this.alertService.clear();
        }, 5000);
      });
    } else {

    }

  }

  groupAndSplitData() {
    /**
     * Currently hardcoded but expecting this row from the BE
     */
    if (this.otherCostResult.length > 1) {
      this.otherCostResult.push({
        "id": 19999,
        "cost": "",
        "costSectionTitle": "1.1 Material Related Portion",
        "currency": "",
        "remark": "",
        "sectionTitle": "3.0" 
      })
    }

    this.otherCostResult.map((val) => { this.groupBySectionTitle[val.sectionTitle] = [] });
    this.otherCostResult.forEach((val) => {
      this.groupBySectionTitle[val.sectionTitle].push(val);
    });

    Object.keys(this.groupBySectionTitle).sort().forEach((val, key) => {
      this.rowData[key] = this.groupBySectionTitle[val];
    });
  }

  assembleRows(materialObject, materialArr) {
    materialObject.firstRow[0].remark = materialObject.firstRowParams.remark;
    let check = materialObject.originalRowData.filter((val) => val.id == materialObject.firstRow[0].id)
    if (check.length > 0) {
      /**
       * Assemble the data
       */
      materialObject.originalRowData.forEach((val) => {
        if (val.id == check[0].id) {
          val.name = materialObject.firstRowParams.name;
          val.remark = materialObject.firstRowParams.remark;
        }
        materialArr.push(val)
      });
    }
    return (materialArr);
  }

  savePriceData() {
    let materialArr = [];
    materialArr = this.assembleRows(this.materialPortionGrid, materialArr);

    let assembleObject = [];

    this.childComponents.forEach((comp, key) => {
      comp.firstRow[0].remark = comp.firstRowParams.remark;
      let check = comp.originalRowData.filter((val) => val.id == comp.firstRow[0].id)
      if (check.length > 0) {
        /**
         * Assemble the data
         */
        comp.originalRowData.forEach((val) => {
          if (val.id == check[0].id) {
            val.costSectionTitle = comp.firstRowParams.costSectionTitle;
            val.remark = comp.firstRowParams.remark;
          }
          assembleObject.push(val)
        });
      }
    });

    let resultObj = {
      'pipingPbdMaterialCosts': materialArr,
      'pipingPbdOtherCosts': assembleObject
    }

    if (this.transactionId) {
      /**
       * PBD From
       * MTO Transaction
       */
      this.priceBreakDownService.savePriceBreakDownOfTransaction(this.projectCode, this.transactionId, resultObj).subscribe((data) => {
        this.alertService.success('Successfully Saved.');
        this.ngbModalService.dismissAll();
        setTimeout(() => {
          this.alertService.clear();
        }, 5000);
      }, (err) => {
        if (err && err.error && err.error.message) {
          this.alertService.error(err.error.message);
        } else {
          this.alertService.error('Error in rendering.');
        }
        setTimeout(() => {
          this.alertService.clear();
        }, 5000);
      });
    } else {

    }
  }
}