import { Component, OnInit, Input } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  //This is elem of TYPE and not assigning the values as we are not on right side of the = symbol
  @Input() element: {
    name: string,
    age: number
  }
/**
 * Here aliasParentEl is the way the Sender or Parents send the data to child. The name which parent sends.
 * The parent sends it like aliasParentEl but child uses element1 in its template, but child is stubborn to use different name than what parent sends, so i will alias the parent name and use child own name
 * Incase both parents and children use same data then neednot use alias like above scenario.
 */
  @Input('aliasParentEl') element1: { name: string, age: number }
  constructor() { }

  ngOnInit() {
  }

}