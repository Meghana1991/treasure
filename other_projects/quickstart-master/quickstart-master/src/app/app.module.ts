import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppSecondComponent } from './second.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AppSecondComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
