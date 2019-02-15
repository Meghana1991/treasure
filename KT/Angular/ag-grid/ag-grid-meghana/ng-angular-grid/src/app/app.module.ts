import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { WidgetModule } from './widget/widget.module';
import { MegGridComponent } from './widget/meg-grid/meg-grid.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    WidgetModule,
    AgGridModule.withComponents([MegGridComponent]), //The withComponents call is necessary for the grid to be able to use Angular components as cells / headers - you can ignore it for now.
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }