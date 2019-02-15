import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegGridComponent } from './meg-grid/meg-grid.component';

@NgModule({
  declarations: [MegGridComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    MegGridComponent
  ]
})
export class WidgetModule { }