import { Component, OnInit, Output,EventEmitter, ViewEncapsulation } from '@angular/core';
import { Child2Model } from './child2.model';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Child2Component implements OnInit {
  @Output('child2Ev') child2Event = new EventEmitter();
  public myPageLoad = false;

  constructor() { }

  ngOnInit() {
  }

  createChild2 = function(){
    this.child2Event.emit(new Child2Model('Manju',23));
  }

  public makePageLoadChange = function(){
    this.myPageLoad = true;
  }
}