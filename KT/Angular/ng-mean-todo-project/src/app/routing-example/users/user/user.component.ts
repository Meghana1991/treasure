import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private route: ActivatedRoute) { }

  /**
   * ActivatedRoute gives us the current active route along with lot of other metadata
   * In this example, we can get the URL of the current route
   */
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    /**
     * To see the changes in the params ie what is being defined in the router like
     * id and name. This listens to changes in the params hence we subscribe it whereas the snapshot doesn't listen
     */

    this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    })
  }

}
