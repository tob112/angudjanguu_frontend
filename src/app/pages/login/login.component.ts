import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Restangular } from 'ngx-restangular';


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, private restangular: Restangular) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  //Login
  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this.restangular.post(this.email, this.password).subscribe((response) => {

      }, (errorResponse) => {
        window.alert(`Error with status code: ${errorResponse.status} -> ${errorResponse.text()}`);

      });


    }


    //   onCreateConfirm(event): void { // table refresh nach user add fehlt
    //     const newUser = event.newData;
    //
    //   this.baseUsers.post(newUser).subscribe((response) => {
    //     event.confirm.resolve();  // erstellt user in table wenn post funktioniert
    //   }, (errorResponse) => {
    //     window.alert(`Error with status code: ${errorResponse.status} -> ${errorResponse.text()}`);
    //     event.confirm.reject(); // erstellt user nicht in table
    //   });
    //
    //
    // }


  }
}
