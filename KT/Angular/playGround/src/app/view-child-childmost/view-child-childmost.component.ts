import { Component, OnInit, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-view-child-childmost',
  templateUrl: './view-child-childmost.component.html',
  styleUrls: ['./view-child-childmost.component.css']
})
export class ViewChildChildmostComponent implements OnInit, AfterContentInit {
  someVar = 'Oh Ye';
  someOtherVarHere;
  constructor() { }
  @ContentChild('someContent') content: ElementRef

  ngOnInit() {
  }

  someFn() {
    console.log(this.someVar)
  }

  ngAfterContentInit() {
    console.log('content -', this.content)
  }
}
