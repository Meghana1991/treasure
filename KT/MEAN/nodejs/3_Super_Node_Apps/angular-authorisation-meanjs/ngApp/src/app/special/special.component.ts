import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../eventservice.service';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  specials = [];
  constructor(private eventServ: EventserviceService) { }

  ngOnInit() {
    this.eventServ.getSpecial().subscribe(
      (resp) => {
        this.specials = resp;
      }, (err) => {
        console.log(err)
      }
    )
  }

}
