import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUserNames = ['Max', 'SS']
  reactiveForm: FormGroup;

  /**
   * We need to initialise the form before the
   * template is being loaded hence choose the ngoninit
   */
  ngOnInit() {
    /**
     * Add controls to the form using the below approach
     */
    this.reactiveForm = new FormGroup({
      /**
       * Syntax Here
       * 'key' : new FormControl(defaultValue,[validators]), 
       */
      /**
       * One could group the fields together using nesting form group
       */
      /** We need to
       * link the form controls here to the HTML form and 
       * to do that, [FormGroup] in html
       */
      'groupFieldsTogether': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('female')
    })
    /**
     * There are 2 observables available 1)statusChanges 2)valueChanges
     */
    this.reactiveForm.valueChanges.subscribe((val) => {
      console.log(val)
    })

    this.reactiveForm.statusChanges.subscribe((status) => {
      console.log(status)
    })

    /**
     * There are setValue() and patchValue()
     * The setvalue will set values to the form and the patch value will override those mentioned in the patchvalue alone and setvalue will still remain
     */

     /**
      * SetValue expects the entire object to be defined
      * PatchValue can be used to define certain property
      */
    this.reactiveForm.setValue({
      groupFieldsTogether: {
        username: 'Someone',
        email: 'some@om.com'
      },
      gender: 'female'
    });

    this.reactiveForm.patchValue({
      groupFieldsTogether: {
        username: 'newVal'
      }
    });
  }

  onSubmit() {
    console.log(this.reactiveForm)
  }

  /**
   * Custom validator
   */
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    /**
     * One is free to check the this.reactiveForm
     * always ok
     */
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }
    return null;
  }
}