import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../eventservice.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = [];
  constructor(private eventService: EventserviceService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      (resp) => {
        this.events = resp;
      }, (err) => {
        console.log(err)
      }
    )
  }

}
