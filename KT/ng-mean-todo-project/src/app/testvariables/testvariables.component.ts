import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testvariables',
  templateUrl: './testvariables.component.html',
  styleUrls: ['./testvariables.component.css']
})
export class TestvariablesComponent implements OnInit {
  testVar: string;
  constructor() {
    this.testVar = "constructor";
  }

  ngOnInit() {
    console.log(this.testVar)
  }

  changeVar(){
    this.testVar = "Hiii"
  }
}
