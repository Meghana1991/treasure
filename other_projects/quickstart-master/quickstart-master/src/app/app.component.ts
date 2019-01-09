import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{ops}}<appsecond [ops] = "ops"></appsecond></h1>`,
})
export class AppComponent {
  public applications: any;

  public ops = 'hi';
  // public options: any = this.makeOptions(this.applications);

  public getApps(): any {
    return this.applications = [];
  }

  public makeOptions(applications?: any, megaT?: any) {
    return {
      dataSource: {
        cellContent: (columnKey?: any, rowIndex?: any) => {
          if (!this || !this.applications) {
            return;
          }
          const entity = this.applications[rowIndex];
          if (!entity) {
            return;
          }
          switch (columnKey) {
            case 'menu':
              return 'menu';
            default:
              let cellHtmlContent = entity[columnKey];
              cellHtmlContent = cellHtmlContent === null ? '' : cellHtmlContent;
              return 'default';
          }
        },
        /**
         * @param {any} rowIndex
         * @returns
         */
        itemAt: (rowIndex?: any) => this.applications && this.applications[rowIndex],
        items: () => this.applications,
        /**
         * @returns
         */
        rowCount: () => this.applications && this.applications.length || 0,
      },
      arrowSort: true,
      dimensions: {
        filterRowHeight: 32,
        headerHeight: 32,
        rowHeight: 32,
        toolbarHeight: 4,
      },
      enableSorting: false,
      enableSortingFlag: true,
      itemActionMenu: {
        items: [{}],
        visible: true,
      }, filteSelectedItems: (filter?: any, feSearch?: any) => {
        if (filter) {
          console.log('filte calld');
        }
      },
      model: {
        columnGroups: [{
          scrollable: true,
        }],
        displayFilter: false,
        filterAvailable: false,
      },
      events: {
        onSelectColumnToggled: (rowIndex?: any, selected?: any) => {
          console.log('onselect called');
        }
      },
      showSelectColumn: true,
      showActionColumn: false,
      multiSelect: true,
      isBeSearch: true,
      pagination: {
        available: true,
      },
      settingsAvailable: false,
      tableId: 'application-table1',
    };
  }
}