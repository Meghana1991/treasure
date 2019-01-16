import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  choice: string = 'app';
  arr = [];
  arrobj: Array<Object> = [{
    'name': 'some',
    'age': 24
  }, {
    'name': 'someone',
    'age': 26
  }, {
    'name': 'sometwo',
    'age': 28
  }]

  child2ArrPrint = function (event) {
    this.arr.push(event)
  }
}