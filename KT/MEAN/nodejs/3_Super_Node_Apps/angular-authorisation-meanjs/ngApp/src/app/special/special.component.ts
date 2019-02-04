import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../eventservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  specials = [];
  constructor(private route: Router, private eventServ: EventserviceService) { }

  ngOnInit() {
    this.eventServ.getSpecial().subscribe(
      (resp) => {
        this.specials = resp;
      }, (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status == 401) {
            this.route.navigate(['/login'])
          }
        }
      }
    )
  }

}
