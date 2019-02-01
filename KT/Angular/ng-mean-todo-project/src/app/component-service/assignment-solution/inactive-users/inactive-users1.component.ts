import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users1',
  templateUrl: './inactive-users1.component.html',
  styleUrls: ['./inactive-users1.component.css']
})
export class InactiveUsersComponentOne implements OnInit {
  users: string[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
