import { Component } from '@angular/core';

@Component({
  selector: 'basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicComponent {
  title = 'ng-mean-todo-project';
  name = '';
  allow = false;
  bindingVar = "Initial Value";
  nameArr = ['Hey', 'Phew', 'Some', 'Thing']
  clicked = false;
  logClicks = [];

  constructor() {
    setTimeout(() => {
      this.allow = true;
    }, 2000)
  }
  assignmentClick = function () {
    this.clicked = !this.clicked;
    this.logClicks.push('Clicked');
  }
  onClickFn = function () {
    this.name = "Meghana";
  }
  eventTriggered = function (event: any) {
    this.bindingVar = event.target.value;
  }
}