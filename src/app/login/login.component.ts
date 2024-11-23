import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../service/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  errorMessage: string = '';
  constructor(private authService: AuthService) {}

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login({ username, password })
        .subscribe(response => {
          console.log('User is logged in');
            // Handle successful login (optional, e.g., redirect)
          }, error => {
            this.errorMessage = error || 'Sign in failed!';
          }
        );
    }
  }
}
