import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, map, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = environment.apiUrl + 'oop-cw/'

  constructor(private http: HttpClient) {
  }

  registerCustomer(userName: string | null | undefined
    , email: string | null | undefined
    , firstName: string | null | undefined
    , lastName: string | null | undefined
    , password: string | null | undefined
    , contactNo: string | null | undefined) {
    return this.http.post(this.apiUrl + 'public/user/register'
      , {cusInfo: {userName, email, firstName, lastName, password, contactNo}})
      .pipe(map(response => {
          return response;
        }),
        catchError(error => {
          if (error.status === 412) {
            const errorMessage = error.error.errors[0].message;
            return throwError(errorMessage);
          } else {
            // Handle other errors (optional)
            return throwError(error);
          }
        })
      );
  }
}
