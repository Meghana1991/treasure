import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    /**
     * To get the changes of the URL params(:id/:name in the app module ts file) we are using 
     * this.route.params.subscribe()
     * To get the changes of the queryParams
     * this.route.queryParams.subscribe()
     * To get the changes of the fragments
     * this.route.fragment.subscribe()
     */
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
