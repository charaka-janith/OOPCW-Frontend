import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private role: string | null = null;
  isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();
  apiUrl: string = environment.apiUrl + 'authenticate'

  constructor(private http: HttpClient) {}

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('jwt', token); // Optional: Store in local storage as well
  }

  getToken() {
    if (!this.token) {
      this.token = localStorage.getItem('jwt');
    }
    return this.token;
  }

  setRole(role: string) {
    this.role = role;
    localStorage.setItem('role', role); // Optional: Store in local storage as well
  }

  getRole() {
    if (!this.role) {
      this.role = localStorage.getItem('role');
    }
    return this.role;
  }

  clear() {
    this.token = null;
    this.role = null;
    localStorage.removeItem('jwt');
    localStorage.removeItem('role');
  }

  login(credentials: any) {
    return this.http.post(this.apiUrl, credentials)
      .pipe(map(response => {
          if (response.hasOwnProperty('jwt')) {
            this.isLoggedIn.next(true);
            console.log('User is logged in', response);
            // Store any tokens or user data (optional)
          }
          return response;
        }),
        catchError(error => {
          if (error.status === 401) {
            const errorMessage = error.error.errors[0].message;
            return throwError(errorMessage);
          } else {
            return throwError(error);
          }
        })
      );
  }

  logout() {
    // Implement your logout logic here, e.g., clear tokens, redirect to login page
    this.isLoggedIn.next(false);
  }
}
