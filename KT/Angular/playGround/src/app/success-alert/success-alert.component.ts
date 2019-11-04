import { Component, OnInit, EventEmitter } from '@angular/core';
import { MessageModel } from './message.model';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  items = [2, 3, 4, 5];
  // messageSel = new EventEmitter();
  messageSel;
  successMessages: Array<MessageModel> = [
    {
      'message': 'Firsty',
      'type': 'Success',
      'id': 1
    },
    {
      'message': 'Secondy',
      'type': 'Success',
      'id': 2
    },
    {
      'message': 'Thirdy',
      'type': 'Success',
      'id': 3
    },
    {
      'message': 'Fourthy',
      'type': 'Warning',
      'id': 4
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  fieldEdited(event, i) {
    this.successMessages[i]['message'] = event.target.value;
  }

  messageHandler(ev) {
    this.messageSel = ev
  }
}