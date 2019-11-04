import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  @ViewChild('f') signupForm: NgForm;
  user = {
    username: '',
    email: '',
    secretQues: ''
  }
  ownfield: any;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(formdata) {
    /**
     * In Approach 1 - we have used local reference by passing the form on submit
     * and receiving it here and padding patchValue to form of reference
     */
    this.submitted = true;
    formdata.form.patchValue({
      groupingDataFields: {
        username: 'Local Reference'
      }
    })

    /**
     * In Approach 2 - we have used Viewchild and we are using it to set the 
     * value into
     */
    this.signupForm.form.patchValue({
      groupingDataFields: {
        username: 'View Child'
      }
    })
    /**
     * The RHS side are the form control names NOT ngmodel
     */
    this.user.username = this.signupForm.value.groupingDataFields.username;
    this.user.email = this.signupForm.value.groupingDataFields.email;
    this.user.secretQues = this.signupForm.value.secret;
    this.ownfield = this.signupForm.value.ownfield;

    console.log('signupForm', this.signupForm)
    console.log('formdata', formdata.form)
    /**
     * resets the form
     * including the values and also the classes to pristine untouched etc
     */
    this.signupForm.reset();
  }
}