import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  /**
   * This is template driven form, I can use local reference to form or Viewchild
   * But i am using a ngModel mapping technique here
   */
  registerUserModel: {
    email: String;
    password: String;
  }
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  registerUser(form: NgForm) {
    this.registerUserModel = {
      'email': form.form.value['email'],
      'password': form.form.value['password']
    }

    this.authService.registerUser(this.registerUserModel).subscribe(
      (resp) => {
        localStorage.setItem('token', resp.token);
        this.route.navigate(['/special'])
      }, (error) => {
        console.log(error)
      }
    )
  }
}