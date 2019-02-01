import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { ModifyService } from 'src/app/services/heirarchical.service';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css'],
  providers: [ModifyService]
})
export class Example1Component implements OnInit {

  /**
   * I want to inject a service to my component so
   * I will add a variable of type ServiceToBeInjected in the constructor to instantly create a property with same name and bind value to it
   */

  /**
   * Why do we place it in the constructor?
   * Generally the invocation of any of our components are specified explicitly to angular in the HTML file
   * Somehow we need to tell angular to instantiate the Service. Upon doing this, it will give instance of the LoggerService class
   * Now that angular knows what we need, ie the instance of the service. We should tell it how to give by using Providers in app module by registering it
   */
  customArr = [];
  constructor(private loggerService: LoggerService, private modifyService: ModifyService) { }

  ngOnInit() {
    this.loggerService.logData("from Example1 file here");
  }

  GetUpdatedListFromChild() {
    this.customArr = this.modifyService.getData();
  }
}
