import { SearchService } from './../../../../../../container/ui/app/core/services/search.service';
import { UtilService } from './../../../../../../container/ui/app/core/services/util.service';
import { ApplicationManagementService } from '../../applications/appication-management.service';
import { MegaTableService } from '../../../../../../container/ui/app/core/services/mega-table.service';
import { SortService } from '../../../../../../container/ui/app/core/services/sort.service';
import { TabBarService } from './../../../../../../container/ui/app/core/services/tab-bar.service';
import { HostListener, Input, Component, OnInit, SecurityContext } from '@angular/core';
import { ViewEncapsulation, ViewChild, ElementRef ,AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SmComponentConstants } from './../../sm.components.constants';
import { TranslateService } from "container/ui/app/widgets/translate/translate.service";
import {
    MegaTablePaginationComponent,
} from '../../../../../../container/ui/app/widgets/mega-table-pagination/mega-table-pagination.component';
import { widgetConstants } from 'container/ui/app/widgets/widgets.constants';
import { SessionStorageService } from './../../../../../../container/ui/app/core/services/sessionStorage.service';

/**
 * @author  devaraj reddy devaraj.reddy@siemens.com
 * @export ApplicationListComponent
 * @class ApplicationListComponent
 * @description ApplicationListComponent used for application list and pagination
 * includes createApplication()
 */
@Component({
    encapsulation: ViewEncapsulation.None,
    moduleId: module.id,
    selector: 'application-list',
    styleUrls: ['./application-list.component.css'],
    templateUrl: './application-list.component.html',
})
export class ApplicationListComponent implements OnInit {
    @Input() public reload = '';
    public reloadDetect = false;
    public smComponentConstants = SmComponentConstants;
    public applications: Array<any> = [];
    public componentConstants = SmComponentConstants;
    public arrApplications: Array<any> = [];
    public errorMessage: string;
    public megaT: any = {         hasOwnProperty: () => { /* this is used to initialize megatable on load */ },         updateData: () => { /* this is used to initialize megatable on load */ },         updateLayout: () => {}     };
    public modalMessage: String;
    public modal: boolean;
    public tabsArray = [];
    public goTo: String;
    public rowIndex: number;
    public lightbox: boolean = false;
    public pageNumber: number = SmComponentConstants.pageNumber;
    
    /** Pagination */
        public paginationOptions;
        public isPaginationEnabled = true;
        public pageSize: number = widgetConstants.pagination_default_pageSize;
        public ONE = SmComponentConstants.default_size;
        public currentPage: number = SmComponentConstants.initialPageCount;
        public pageCount: number = SmComponentConstants.initialPageCount;
    /**/

    public tblheight: number = SmComponentConstants.tblheight;
    public blnkspcheight: number = SmComponentConstants.blnkspcheight;
    public pageLoading: boolean = true;
    public unfilteredApplications: Array<any> = [];
    public sortKey: string;
    // public sortKey: string = this.componentConstants.application_list_sort_key;
    public sortDirection: boolean = true;
    public alertModalOptions = {
        buttonList: [
            {
                callBack: () => {
                    this.lightbox = false;
                    if (this.deleteArray.length <= 1) {
                        let id;
                        if (this.rowIndex !== undefined) {
                            id = this.applications[this.rowIndex].id;
                        } else {
                            id = this.deleteArray[0];
                        }
                        this.deleteArray = [];
                        this.pageLoading = true;
                        this.isFilter = false;
                        this.applicationManagementService.deleteApplication(id)
                            .subscribe(
                            (response) => {
                                this.notificationVisible = true;
                                this.setNotificationOptions(this.componentConstants.app_inst_success_noti, this.componentConstants.app_inst_success_delete, undefined);
                                //sessionStorage.setItem('searchHeaderV', undefined);
                                this.getAllApplications(this.ONE);
                            },
                            (error) => {
                                this.notificationVisible = true;
                                this.pageLoading = false;
                                this.setNotificationOptions(this.componentConstants.app_inst_error_noti, this.componentConstants.app_inst_error_delete, error);
                                //sessionStorage.setItem('searchHeaderV', undefined);
                                //this.getAllApplications();
                            },
                        );
                    } else {
                        this.pageLoading = true;
                        let successCount = 0;
                        let errorCount = 0;
                        let itemsProcessed = 0;
                        this.isFilter = false;
                        this.deleteArray.forEach((appId) => {
                            this.applicationManagementService.deleteApplication(appId).subscribe(
                                (data) => {
                                    successCount++;
                                    itemsProcessed++;
                                    if (itemsProcessed === this.deleteArray.length) {
                                        this.deleteNotification(successCount, errorCount);
                                    }
                                },
                                (error) => {
                                    errorCount++;
                                    itemsProcessed++;
                                    this.errors.push(error);
                                    if (itemsProcessed === this.deleteArray.length) {
                                        this.deleteNotification(successCount, errorCount, error);
                                    }
                                });
                        });
                    }

                },
                label: 'Delete',
            },
            {
                callBack: () => {
                    this.lightbox = false;
                },
                label: 'Cancel',
            },
        ],
        message: this.translateService.instant(SmComponentConstants.applicationmanagement_delete_applicationinstance_warning_modalmessage),
        title: SmComponentConstants.applicationmanagement_delete_application_title,
        close: () => {
            this.lightbox = false;
        }
    };
    /**
     * @type {*}
     * @memberOf ApplicationListMegaTableComponent
     */
    public isFilter = false;
    public options: any = this.makeOptions(this.applications, this.megaT);
    public applicationActions: any;
    public selectedRowIndex;
    public showFTActionMenu: boolean = false;
    public notificationVisible: boolean = false;
    public notificationOptions = {
        displayType: '',
        error: undefined,
        message: ''
    };
    public deleteArray = [];
    public applicationsHamburgerMenuActions: Array<any>;
    public showapplicationsHamburgerMenuActions: boolean = false;
    @ViewChild(MegaTablePaginationComponent)
    private paginationComponent: MegaTablePaginationComponent;

    private errors = [];
    private applicationTypes = [];
    /**
     * Creates an instance of ApplicationListComponent.
     * @param {Router} router
     * @param {ActivatedRoute} route
     * @param {TabBarService} tabBarService
     * @param {ApplicationManagementService} applicationManagementService
     * @memberOf ApplicationListComponent
     */
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private tabBarService: TabBarService,
        private applicationManagementService: ApplicationManagementService,
        private sortService: SortService,
        private megaTableService: MegaTableService,
        private translateService: TranslateService,
        private utilService: UtilService,
        private searchService: SearchService,
        private sessionService: SessionStorageService,        
    ) {
        this.setpaginationOptions();        
    }
    /**
     * Method to add tab and display create application page.
     * @memberOf ApplicationListComponent
     */
      
    public createApplication() {
        this.tabsArray = JSON.parse(this.sessionService.getSavedTabs()) ? JSON.parse(this.sessionService.getSavedTabs()) : [];
        if (this.tabsArray && (this.tabsArray.indexOf('New Application Instance') > -1)) {
            this.modalMessage = this.componentConstants.create_app_tab_exists;
            this.modal = true;
        } else {
            this.tabsArray.push('New Application Instance');
            this.tabBarService.addTab('New Application Instance', '/main/sm/sm/createApplication', { id: 1 }, this.router.url, undefined, undefined);
        }
        this.sessionService.saveTabs(JSON.stringify(this.tabsArray));
    }

    public functiontofindIndexByapplicationTypes(key, valuetosearch) {
        for (let i = 0; i < this.applicationTypes.length; i++) {
            if (this.applicationTypes[i][key] === valuetosearch) {
                return i;
            }
        }
        alert(this.componentConstants.error_application_instance);
        return null;
    }
    /**
     * @desc show action items in the table.
     * @param {any} event
     * @param {any} rowIndex
     * @memberOf ApplicationListMegaTableComponent
     */
    public toggleApplicationsActionMenu(event, rowIndex) {
        this.selectedRowIndex = rowIndex;
        this.showFTActionMenu = true;
        this.applicationActions =
            [
                {
                    title: 'Edit',
                    id: 0,
                    rowIndex: rowIndex,
                    onclick: (rowIndex) => {
                        this.showFTActionMenu = false;
                        const application = this.applications[rowIndex].id;
                        setTimeout(() => {
                            this.tabBarService.addTab(this.componentConstants.edit_application_instance, '/main/sm/sm/createApplication/' + application, { id: 1 }, this.router.url, undefined, undefined);
                        });
                    }
                },
                {
                    title: 'Delete',
                    id: 1,
                    rowIndex: rowIndex,
                    onclick: (rowIndex) => {
                        if (this.deleteArray.length > 1) {
                            this.modalMessage = this.componentConstants.app_inst_multi_select_modal_msg;
                            this.modal = true;
                        } else {
                            this.lightbox = true;
                            this.rowIndex = rowIndex;
                            let message = this.translateService.instant(SmComponentConstants.applicationmanagement_delete_applicationinstance_warning_modalmessage)
                            this.alertModalOptions.message = message + (
                                this.applications[this.rowIndex].name ?
                                    ' (' + this.applications[this.rowIndex].name + ')' : '  ') + '.';
                        }
                    }
                }
            ];
    }

   
    /**
     * @desc close the notification box when clicking anywhere.
     * @param {any} targetElement
     * @memberOf ApplicationListMegaTableComponent
     */
    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        this.notificationVisible = false;
    }
    /**
     * @to get all applications
     * @memberOf ApplicationListMegaTableComponent
     */
    public ngOnInit() {
        this.getAllApplications(this.ONE);
        $(window).on('resize', () => {
            this.megaT.updateLayout();
        });
    }

    public tableHeight() {
        if (this.applications.length > 0) {
            this.tblheight = 100 + (this.applications.length * 32);
            this.blnkspcheight = 0;
        } else {
            this.tblheight = 162;
            this.blnkspcheight = 96;
        }
        setTimeout(() => {
            this.pageLoading = false;
            this.megaT.updateLayout();
        }, 100);

    }
    /**
     * @call ApplicationManagementService and get all application type and application details
     * @memberOf ApplicationListMegaTableComponent
     */
    public getAllApplications(pageNumber: number) {
        this.applications = [];
        this.currentPage = pageNumber;
        this.pageLoading = true;
        this.pageNumber = pageNumber;
        this.arrApplications = [];
        if (this.megaT) {
            this.megaT.updateData();
        }
        this.pageLoading = true;
        const currentComp = this;
        let dt: number = 0;
        try {
            // Logic: Get all the application types store in some array. and get applications after that.
            this.applicationManagementService.getAllApplicationsService(this.pageNumber - this.ONE,this.pageSize,this.sortDirection,this.sortKey).map(
                    (res) => {
                        const tempApp = res.content;
                        tempApp.forEach((applicationData) => {
                            let appJsonObj = {};
                            // To get the application name from the array
                            appJsonObj = {
                                typeName: applicationData.type_name,
                                id: applicationData.id,
                                template: applicationData.template,
                                name: applicationData.name
                            };
                            currentComp.arrApplications.push(appJsonObj);
                            this.applications = currentComp.arrApplications;
                            this.unfilteredApplications = this.applications.slice();
                            this.pageCount = this.applicationManagementService.getPageCount();

                            if (res && res.totalPages) {
                                this.applicationManagementService.setPageCount(res.totalPages);
                                this.pageCount = res.totalPages;
                            }else {
                                if (res && res._links) {
                                    this.applicationManagementService.processAuditLogsLinks(res._links);
                                    this.pageCount = this.applicationManagementService.getPageCount();
                                }
                            }

                            this.options.highlightSort = (this.sortKey) ? this.sortKey : this.componentConstants.application_list_sort_key;

                            if (this.megaT) {
                                if (this.options && this.options.searchText && this.options.highlightSort && this.options.itemsFiltered) {
                                    const column = this.getColumn(this.options.highlightSort);
                                    this.options.itemsFiltered(this.searchService.filter(this.unfilteredApplications, column.dataType, this.options.highlightSort, this.options.searchText, column.sortDirection));
                                } else {
                                    this.megaT.updateData();
                                }
                            }

                            if (this.paginationComponent) {
                                this.paginationComponent.updatePagination();
                            }

                            dt += 1;
                            if (dt === res.content.length) { this.tableHeight(); this.megaTableService.isAllSelected.next(false); }
                        });
                    },
                    (error) => {
                        if (this.megaT) {
                            this.megaT.updateData();
                        }
                        this.tableHeight();
                        this.megaTableService.isAllSelected.next(false);
                        this.notificationVisible = true;
                        this.setNotificationOptions(this.componentConstants.app_inst_error_noti, this.componentConstants.app_inst_error_display_app, error);
                    }
                )
            .subscribe(
                (data) => {
                    this.tableHeight();
                },
                (error) => {
                    if (this.megaT) {
                        this.megaT.updateData();
                    }
                    this.tableHeight();
                    this.notificationVisible = true;
                    this.setNotificationOptions(this.componentConstants.app_inst_error_noti, this.componentConstants.app_inst_error_display_app, error);
                }
                );
        } catch (err) {
            if (this.megaT) {
                this.megaT.updateData();
            }
            this.tableHeight();
            this.notificationVisible = true;
            this.setNotificationOptions(this.componentConstants.app_inst_error_noti, this.componentConstants.app_inst_error_display_app, err);
        }
    };

    /**
     * @to remove modal dialog message
     * @memberOf ApplicationListMegaTableComponent
     */
    public onModalOk() {
        this.modal = false;
    }


    /**
     * @desc To show notification when multiple deletes happened.
     * @param {any} successCount
     * @param {any} errorCount
     * @param {any} [error]
     * @memberOf ApplicationListMegaTableComponent
     */
    public deleteNotification(successCount, errorCount, error?) {
        const errorFromBackend = this.errors[0];
        if (successCount === this.deleteArray.length) {
            this.notificationVisible = true;
            this.setNotificationOptions(this.componentConstants.app_inst_success_noti, this.translateService.instant(this.componentConstants.app_inst_all_delete_success), errorFromBackend);
            this.deleteArray = [];
            sessionStorage.setItem('searchHeaderV', undefined);
            this.getAllApplications(this.ONE);
            this.megaTableService.isAllSelected.next(false);
        } else {
            this.notificationVisible = true;
            let messsage = this.buildMessage('Status : ', successCount, ' out of ',
                this.deleteArray.length, this.componentConstants.app_inst_multi_delete_msg);
            this.setNotificationOptions(this.componentConstants.app_inst_error_noti, messsage + ' : ', errorFromBackend);
            this.deleteArray = [];
            sessionStorage.setItem('searchHeaderV', undefined);
            this.getAllApplications(this.ONE);
            this.megaTableService.isAllSelected.next(false);
        }
    }

    /**
     * @desc show the action popup on click and load the action items.
     * @memberOf ApplicationListMegaTableComponent
     */
    public showApplicationsHamburgerMenuPopup() {
        this.applicationsHamburgerMenuActions = [
            {
                name: this.componentConstants.delete_selected_items,
                onclick: () => {
                    if (this.deleteArray.length === 0) {
                        this.modalMessage = this.componentConstants.app_inst_modal_msg_atleast_one;
                        this.modal = true;
                        this.showapplicationsHamburgerMenuActions = false;
                    } else {
                        this.lightbox = true;
                        this.alertModalOptions.message =
                            this.translateService.instant(this.componentConstants.application_delete_message_1)
                            + this.deleteArray.length + this.translateService.instant(this.componentConstants.application_delete_message_2);
                        this.showapplicationsHamburgerMenuActions = false;
                    }
                }
            }
        ];
        this.showapplicationsHamburgerMenuActions = true;
    }

    /**
     * @param {any} applications
     * @param {any} megaT
     * @returns
     * @memberOf ApplicationListMegaTableComponent
     */
    public makeOptions(applications, megaT) {
        return {
            dataSource: {
                /**
                 * @param {any} columnKey
                 * @param {any} rowIndex
                 * @returns
                 */
                cellContent: (columnKey, rowIndex) => {
                    if (!this || !this.applications) {
                        return;
                    }
                    if (this.isFilter) {
                        this.tableHeight();
                    }
                    const entity = this.applications[rowIndex];
                    if (!entity) {
                        return;
                    }
                    switch (columnKey) {
                        case 'menu':
                            // if (entity.type.toUpperCase() !== 'FOLDER') {
                            return $('<i style="padding-top: 8px;" id="app_menu' + rowIndex + '" ><img src="container/ui/assets/img/actionIcon.svg"></i>').on('click', () => {
                                this.toggleApplicationsActionMenu(event, rowIndex);
                            });
                        default:
                            const cellHtmlContent = this.utilService.sanitize(SecurityContext.HTML, entity[columnKey]);
                            return $('<div title="' + this.utilService.sanitize(SecurityContext.HTML, entity[columnKey].replace(/['"]+/g, '')) + '">' + cellHtmlContent + '</div>');
                    }
                },
                /**
                 * @param {any} rowIndex
                 * @returns
                 */
                itemAt: (rowIndex) => this.applications && this.applications[rowIndex],
                items: () => this.applications,
                unfilteredItems: () => this.unfilteredApplications,
                /**
                 * @returns
                 */
                rowCount: () => this.applications && this.applications.length || 0,
            },
            highlightSort: (this.sortKey) ? this.sortKey : this.componentConstants.application_list_sort_key,
            arrowSort: true,
            dimensions: {
                filterRowHeight: 32,
                headerHeight: 32,
                rowHeight: 32,
                toolbarHeight: 4,
            },
            enableSorting: false,
            enableSortingFlag: true,
            /**
             * @param {any} mt
             */
            initialize: (mt) => {
                this.megaT = mt;
            },
            itemActionMenu: {
                items: [
                    {

                    }
                ],
                visible: true,
            },
            module_name: 'Application',
            sortItems: (sort_direction, sort_key, sort_visible?) => {
               if(sort_key !== 'typeName'){
                this.isFilter = false;
                this.sortKey = sort_key;
                sort_direction === 'desc' ? this.sortDirection = false : this.sortDirection = true;
                this.getAllApplications(this.pageNumber);
               }
            },
            itemsFiltered: (filteredItems) => {
                this.isFilter = true;
                this.applications = filteredItems;
                this.megaTableService.isAllSelected.next(true);
                if (this.megaT) {
                    this.megaT.updateData();
                }
            },
            model: {
                columnGroups: [{
                    scrollable: true,
                }],
                columns: [
                    {
                        columnGroupIndex: 0,
                        dataType: 'text',
                        key: 'name',
                        minWidth: 120,
                        order: 0,
                        removable: false,
                        title: 'Application Instance Name',
                        visible: true,
                        width: 200,
                    },
                    {
                        columnGroupIndex: 0,
                        dataType: 'text',
                        key: 'typeName',
                        minWidth: 150,
                        order: 1,
                        removable: false,
                        title: 'Application Type',
                        visible: true,
                        width: 200,
                    },
                    {
                        columnGroupIndex: 0,
                        dataType: 'text',
                        key: 'template',
                        minWidth: 150,
                        order: 1,
                        removable: false,
                        title: 'Application Template',
                        visible: true,
                        width: 100,
                    },
                    {
                        key: 'menu',
                        order: 5,
                        title: 'Action',
                        width: 57,
                        minWidth: 57,
                        maxWidth: 57,
                        removable: false,
                        columnGroupIndex: 0,
                        visible: true
                    }
                ],
                displayFilter: false,
                filterAvailable: false,
            },
            events: {
                onSelectColumnToggled: (rowIndex, selected) => {
                    if (this.applications[rowIndex] !== undefined) {
                        const application = this.applications[rowIndex].id;
                        if (selected) {
                            if (this.deleteArray.indexOf(application) === -1) { this.deleteArray.push(application); }
                        } else {
                            const index = this.deleteArray.indexOf(application);
                            this.deleteArray.splice(index, 1);
                        }
                    }
                }
            },
            showSelectColumn: true,
            showActionColumn: false,
            multiSelect: true,
            pagination: {
                available: true,
            },
            settingsAvailable: false,
            tableId: 'application-table1',
        };
    }

    public getColumn(columnKey) {
        return this.options.model.columns.find((column) => column.key == columnKey);
    }

    /**
     * to set notification options
     * @param {any} displayType
     * @param {any} message
     * @param {any} error
     * @memberOf ApplicationListMegaTableComponent
     */
    public setNotificationOptions(displayType, message, error) {
        this.notificationOptions.displayType = displayType;
        this.notificationOptions.message = message;
        this.notificationOptions.error = error;
    }

    public buildMessage(status: string, count: number, innerstring: string, arraylenght: number, message: string): string {
        return this.translateService.instant(status) + count + this.translateService.instant(innerstring) + arraylenght + this.translateService.instant(message);
    }

    public setpaginationOptions() {
        this.paginationOptions = {
            available: false,
            firstPage: (currentPage) => {
                this.getAllApplications(currentPage);
            },
            previousPage: (currentPage) => {
                this.getAllApplications(currentPage);
            },
            targetPage: (value) => {
                this.getAllApplications(value);
            },
            nextPage: (currentPage) => {
                this.getAllApplications(currentPage);
            },
            lastPage: () => {
                this.getAllApplications(this.pageCount);
            },
            pageSizeChange: (value) => {
                this.pageSize = value;
                this.getAllApplications(this.ONE);
            },
            pageCount: () => this.pageCount,
            currentPage: () => this.currentPage,
            pageSize: () => this.pageSize
        };
    }
}/* istanbul ignore next */
