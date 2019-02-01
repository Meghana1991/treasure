import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Child2Component } from './child2/child2.component';
import { LoggerService } from './services/logger.service';
import { TestvariablesComponent } from './testvariables/testvariables.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  /**
   * View Child Example
   */

  @ViewChild('localRefUsingViewChild') localRefUsingViewChild: ElementRef;
  @ViewChild(Child2Component) referenceToChild2: Child2Component;
  @ViewChild(TestvariablesComponent) testVarComp: TestvariablesComponent;

  public ngOnInit() {
    /**
     * Using the ViewChild - you get to see the reference element on load itself unlike local reference method where you can see only on some event
     */
    // console.log(this.localRefUsingViewChild.nativeElement.val)
  }

  public mypageLoadFunc() {
    /**
     * Make my current variable 'myPageLoad' to true which is false by default
     */
    this.referenceToChild2.makePageLoadChange();
  }
  child2ArrPrint = function (event) {
    this.arr.push(event)
  }

  passData = function (dataFromTemplate) {
    console.log(dataFromTemplate.innerText);
  }

  checkClickedPage = function (page) {
    if (page == 'recipe') {
      this.clickedPage = 'recipe'
    } else if (page == 'shopping') {
      this.clickedPage = 'shopping'
    }
  }

  /**
   * InApproproiate way of accessing the service
   */

  fetchData() {
    var loggerService = new LoggerService();
    loggerService.logData("Sai");
  }

  clicked = false;
  public updateBtn(){
    this.clicked = true;
  }
}