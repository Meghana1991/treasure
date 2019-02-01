import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

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

  public editServer() {
    /**
     * Ideally you need to follow the below syntax if your route is not child of anything but the topmost level
     */
    this.router.navigate(["/servers",this.server['id'],'edit']);
    /**
     * Incase this /edit route is child or something then we can simply omit certain things like
     * relativeTo takes the reference of the current route
     * queryParamsHandling is used inorder to preserve the queryparams when we are navigating from place to place
     * Navigating from /server/id > /servers/id/edit, we generally lose the queryparams, so if we want to preserve it then queryParamsHandling
     */
    this.router.navigate(["edit"],{relativeTo : this.route, queryParamsHandling : 'preserve'})
  }
}