import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserModel: {
    email: String;
    password: String;
  }
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  loginUser(form: NgForm) {
    this.loginUserModel = {
      'email': form.form.value['email'],
      'password': form.form.value['password']
    }
    this.authService.loginUser(this.loginUserModel).subscribe(
      (resp) => {
        localStorage.setItem('token',resp.token)
        this.route.navigate(['/special'])
      }, (error) => {
        console.log(error)
      }
    )
  }
}
