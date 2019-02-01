import { Component, OnInit } from '@angular/core';
import { ModifyService } from 'src/app/services/heirarchical.service';

@Component({
  selector: 'app-example-child',
  templateUrl: './example-child.component.html',
  styleUrls: ['./example-child.component.css'],
  providers: [ModifyService]
})
export class ExampleChildComponent implements OnInit {
  /**
   * Here this component example-child is child of example1
   * Both have declared the providers and both would have their own instances
   * Because of this, the updation would not be carried to components.
   * Check this example
   */
  someArr = [];
  newItem: any;
  constructor(private modifyService: ModifyService) { }

  ngOnInit() {
    this.someArr = this.modifyService.getData();
  }

  updateDataFromService() {
    this.modifyService.addData(this.newItem)
  }
}
