import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  loadServers(id) {
    /**
     * Trigger or navigate the routes to
     * different pages hence loading the respective components
     */
    // this.router.navigate(["/servers"])
    this.router.navigate(["/server", id, 'edit'], { queryParams: { allowEdit: "1" }, fragment: 'loading' })
  }

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}
