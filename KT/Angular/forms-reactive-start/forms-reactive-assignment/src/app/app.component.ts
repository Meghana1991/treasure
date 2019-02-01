import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  assignmentForm: FormGroup

  ngOnInit() {
    this.assignmentForm = new FormGroup({
      'proj_name': new FormControl(null, Validators.required),
      'project_email': new FormControl(null, [Validators.required, Validators.email]),
      'project_dd': new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.assignmentForm.get('project_email').value)
  }
}