import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

  private eventsURL = "http://localhost:3000/inside/events";
  private specialEventsURL = "http://localhost:3000/inside/special";
  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this.eventsURL)
  }
  getSpecial() {
    return this.http.get<any>(this.specialEventsURL)
  }
}
