import { Component, OnInit, ViewChild, ElementRef, ContentChild, AfterContentInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ViewChildChildmostComponent } from '../view-child-childmost/view-child-childmost.component';

@Component({
  selector: 'app-view-child-ways',
  templateUrl: './view-child-ways.component.html',
  styleUrls: ['./view-child-ways.component.css']
})
export class ViewChildWaysComponent implements OnInit {
  @ViewChild('simplyLocalReference') viewchildRef: ElementRef
  @ViewChild(ViewChildChildmostComponent) child: ViewChildChildmostComponent;

  constructor() { }

  ngOnInit() {
    console.log('simplyLocalReference', this.viewchildRef.nativeElement.innerText)
    console.log('child', this.child.someVar)
  }
}