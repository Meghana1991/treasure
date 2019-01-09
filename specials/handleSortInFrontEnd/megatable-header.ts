import { NumberFilterComponent } from './../mega-table/filter/number-filter/number-filter.component';
import { MegaTableService } from './../../core/services/mega-table.service';
import { FileSizeFilterComponent } from './../mega-table/filter/file-size/file-size-filter.component';
import {
    Component,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    Input,
    ViewContainerRef,
    ViewEncapsulation,
    OnInit
} from '@angular/core';

import { TextFilterComponent } from '../mega-table/filter/text-filter/text-filter.component';

declare var $: JQueryStatic;
declare var _: any;

/**
 * @author Damodhar Kavali damodhar.kavali@siemens.com
 * @description this is the action button which creates the action icon
 * @export
 * @class MegaTableActionButtonComponent
 */
@Component({
    encapsulation: ViewEncapsulation.None,
    moduleId: module.id,
    selector: 'crspng-mega-table-header',
    templateUrl: './mega-table-header.component.html',
    styleUrls: ['./mega-table-header.component.css']
})
export class MegaTableHeaderComponent implements OnInit {

    @Input() public innerContent: any;
    @Input() public columnKey: any;
    @Input() public highlight: any;
    public sortIconVisible: string = '';

    @Input() private options: any;

    private columnFilterData: any = {};
    private allSelected: boolean = false;
    private MegaTableItemProperty = {
        SELECTED: '__mt_selected__',
        HIDDEN: '__mt_hidden__'
    };
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
        private megaTableService: MegaTableService
    ) { }

    public ngOnInit() {
        this.options.lastcol = '';
        // Subscribing to event to set the image depending on weather all rows checked/unchecked.
        this.megaTableService.isAllSelected$.subscribe((data) => {
            this.allSelected = this.options.dataSource.items().every((item) => item[this.MegaTableItemProperty.SELECTED]);
        });
    }

    public setInputValues(options, innerContent, columnKey) {
        this.options = options;
        this.innerContent = innerContent;
        this.columnKey = columnKey;
        if (this.columnKey == this.options.highlightSort) {
            this.highlight = 'red';
            this.sortIconVisible = this.options.arrowSort ? 'asc' : 'desc';
        }
        // else { this.sortIconVisible = ''; }
    }

    /**
     * @desc methods gets executed when the header checkbox is clicked.
     * @private
     * @param {any} event
     * @memberOf MegaTableHeaderComponent
     */
    private toggleSelectAll(event) {
        this.allSelected = !this.allSelected;
        this.megaTableService.allSelected.next(this.allSelected);
        this.options.dataSource.items().forEach((item, index) => this.setRowSelected(index, this.allSelected));
        event.stopPropagation();
    };

    /**
     * @desc to set all rows checked/unchecked.
     * @private
     * @param {any} rowIndex
     * @param {any} selected
     * @returns
     * @memberOf MegaTableHeaderComponent
     */
    private setRowSelected(rowIndex, selected) {
        const item = this.options.dataSource.items()[rowIndex];
        if (item !== undefined) {
            if (!!item[this.MegaTableItemProperty.SELECTED] === !!selected) {
                return;
            }
            if (selected) {
                item[this.MegaTableItemProperty.SELECTED] = true;
            } else {
                delete item[this.MegaTableItemProperty.SELECTED];
            }
            if (this.options.events.onSelectColumnToggled) {
                this.options.events.onSelectColumnToggled(rowIndex, item[this.MegaTableItemProperty.SELECTED]);
            }
        }
    }

    private toggleColumnFilter(event, columnKey, inlineSortFlag?) {
        /*to clear the ngModel of search's input field.*/
        let clearKey: boolean;
        if (columnKey == this.options.highlightSort) {
            clearKey = false;
        } else {
            clearKey = true;
        }

        if (columnKey !== this.columnFilterData.columnKey || !this.columnFilterData.clickTimeoutActive) {
            const column = this.getColumn(columnKey);
            const filterType = column.dataType;
            if (inlineSortFlag && !column.sortDirection) {
                this.sortIconVisible = this.sortIconVisible === 'asc' ? 'desc' : 'asc';
            } else {
                column.sortDirection = this.sortIconVisible;
            }
            if (!filterType) {
                return;
            }
            if (columnKey !== this.columnFilterData.columnKey) {
                if (this.columnFilterData.columnKey) {
                    this.getColumn(this.columnFilterData.columnKey).filtered = false;
                }
                this.columnFilterData = {};
            }
            if (this.options.lastcol !== columnKey) {
                this.options.lastcol = columnKey;
                column.sortDirection = '';
            }
            if (inlineSortFlag) {
                column.sortDirection = !column.sortDirection ? (this.sortIconVisible ? this.sortIconVisible : 'asc') : (column.sortDirection === 'asc' ? 'desc' : 'asc');
            }
            // if (this.options.lastcol !== columnKey) {
            //     this.options.lastcol = columnKey;
            //     column.sortDirection = '';
            // }

            _.assign(this.columnFilterData, {
                columnKey: columnKey,
                column: column,
                popupTarget: '.column-header-content',
                clearSearch: clearKey,
                inlineSort: inlineSortFlag,
                itemsFiltered: (filteredItems) => {
                    this.sortIconVisible = column.sortDirection;
                    this.updateColumnSortState(columnKey, column.sortDirection);
                    this.options.highlightSort = columnKey;
                    this.options.searchText = this.columnFilterData.searchText;
                    if (this.columnKey == this.options.highlightSort) {
                        this.highlight = 'red';
                    }
                    //column.filtered = filteredItems.length < this.options.dataSource.unfilteredItems().length;
                    if(!inlineSortFlag){
                        this.options.itemsFiltered(filteredItems);
                    }

                    /**
                     * Sorting for Application type handled
                     * in the front end mega table
                     */
                    if(columnKey === 'typeName' && this.options.module_name === 'Application'){
                        this.options.itemsFiltered(filteredItems);
                    }
                },
                visible: true,
                clickTimeoutActive: false,
                items: this.options.dataSource.items(),
                unfilteredItems: this.options.dataSource.unfilteredItems(),
                filterType: (() => {
                    switch (filterType) {
                        default: return 'text';
                        case 'date': return 'date';
                        case 'duration': return 'duration';
                        case 'fileSize': return 'file-size';
                        case 'ipAddress': return 'ip-address';
                    }
                })()
            });
            $(this.getRootNodeFromParsedComponent(this.columnFilterData, filterType)).insertAfter(event.currentTarget);

            this.options.sortItems(column.sortDirection,columnKey);

            //this.columnFilterData.element = this.getRootNodeFromParsedComponent();
            //$compile(`
            //             <srsng-table-column-${this.columnFilterData.filterType}-filter data="columnFilterData">
            //             </srsng-table-column-${this.columnFilterData.filterType}-filter>
            //         `)(scope).insertAfter(event.currentTarget);

        } else {
            this.columnFilterData.clickTimeoutActive = false;
        }

        event.stopPropagation();
    }

    private getColumn(columnKey) {
        return this.options.model.columns.find((column) => column.key == columnKey);
    }
    private updateColumnSortState(sortedColumnKey, sortDirection) {
        this.options.model.columns.forEach((column) => {

            if (column.key == sortedColumnKey) {
                column.sortDirection = sortDirection;
            } else {
                delete column.sortDirection;
            }
        });
    }

    private getRootNodeFromParsedComponent(columnFilterData, filterType) {
        if (filterType == 'size') {
            const componentFactory =
                this.componentFactoryResolver.resolveComponentFactory(FileSizeFilterComponent);
            const ref = this.viewContainerRef.createComponent(
                componentFactory, this.viewContainerRef.length, this.viewContainerRef.injector);
            ref.instance.setInputValues(columnFilterData);
            const hostView = ref.hostView as EmbeddedViewRef<any>;
            return hostView.rootNodes[0];

        } else if (filterType == 'Number') {
            const componentFactory =
                this.componentFactoryResolver.resolveComponentFactory(NumberFilterComponent);
            const ref = this.viewContainerRef.createComponent(
                componentFactory, this.viewContainerRef.length, this.viewContainerRef.injector);
            ref.instance.setInputValues(columnFilterData);
            const hostView = ref.hostView as EmbeddedViewRef<any>;
            return hostView.rootNodes[0];

        }
        else {
            const componentFactory =
                this.componentFactoryResolver.resolveComponentFactory(TextFilterComponent);
            const ref = this.viewContainerRef.createComponent(
                componentFactory, this.viewContainerRef.length, this.viewContainerRef.injector);
            ref.instance.setInputValues(columnFilterData);
            const hostView = ref.hostView as EmbeddedViewRef<any>;
            return hostView.rootNodes[0];
        }
    }
}/* istanbul ignore next */
