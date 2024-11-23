import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './service/authentication/auth-guard.service';
import { AppComponent} from './app.component';
import {SignupComponent} from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
];
