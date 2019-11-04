import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {
  @Input('data') message;
  @Output() messSel = new EventEmitter()
  constructor() { }

  ngOnInit() {
    console.log(this.message)
  }

  messageSelected(mess) {
    this.messSel.emit(this.message)
  }
}