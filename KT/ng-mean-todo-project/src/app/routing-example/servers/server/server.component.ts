import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    /**
     * The getserver() points to object where keys are number but the
     * .params['id'] return the id as string. Hence to typecast the string to number
     * we can add + to it in the beggining
     */
    const initialID = this.route.snapshot.params['id']
    this.server = this.serversService.getServer(+initialID);
    this.route.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params['id'])
    })
  }

}
