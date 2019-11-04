import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { MessageDescriptionComponent } from './message-description/message-description.component';
import { ViewChildWaysComponent } from './view-child-ways/view-child-ways.component';
import { ViewChildHolderComponent } from './view-child-holder/view-child-holder.component';
import { ViewChildChildmostComponent } from './view-child-childmost/view-child-childmost.component';
import { BasicHighlight } from './directives/basic-highlight';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    MessageDetailsComponent,
    MessageDescriptionComponent,
    ViewChildWaysComponent,
    ViewChildHolderComponent,
    ViewChildChildmostComponent,
    BasicHighlight
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }