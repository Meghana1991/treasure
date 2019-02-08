import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('title') cameFromParentsComponent: String;
  @Output('childVal') childVal = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {}

  emitToParentsComponent() {
    this.childVal.emit('Hi from the Childie')
  }
}