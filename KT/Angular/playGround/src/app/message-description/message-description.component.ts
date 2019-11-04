import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-description',
  templateUrl: './message-description.component.html',
  styleUrls: ['./message-description.component.css']
})
export class MessageDescriptionComponent implements OnInit {
  @Input() desc;
  constructor() { }

  ngOnInit() {
    console.log('messageSel', this.desc)
  }

  displayMessageHandler() {
    console.log('displayMessageHandler')
  }
}
