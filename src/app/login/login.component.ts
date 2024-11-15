import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      password: ['']
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      password: ['']
    });
  }

  onSubmit(): void {
    // Handle form submission
  }
}
