import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    contactNo: new FormControl('', Validators.required)
  });
  errorMessage: string = '';
  constructor(private userService: UserService, private router: Router) {}

  signup() {
    if (this.signupForm.valid) {
      const { userName, email, firstName, lastName, password, contactNo } = this.signupForm.value;
      this.userService.registerCustomer(userName, email, firstName, lastName, password, contactNo)
        .subscribe(
          response => {
            this.router.navigate(['/sign-in']).then(r => {});
          },
          error => {
            this.errorMessage = error || 'Sign up failed!';
          }
        );
    }
  }
}
