import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Hi There';
  title1: String = 'Hi There';
  title2: String = '';

  childVal: String;

  childEventCollection(data) {
    this.childVal = data;
  }

  sendLocalRef(reference) {
    console.log(reference)
  }
}