import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { of, Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, mapTo, tap } from 'rxjs/operators';
import { AuthLoginInfo } from '../../login/login-info';
import { ApiService } from '../api/api.service';
import { url, userName } from '../api/apiUrl'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly USERNAME = 'username';
  private readonly USER_ID = 'userid';
  private readonly ROLE = 'role';
  private readonly TRACEID = 'traceId';
  private readonly BANKUSERROLE = 'bankUserRole';
  private messageSource = new BehaviorSubject('default message');
  public currentMessageSubscriber = this.messageSource.asObservable();

  constructor(private http: HttpClient, private apiService: ApiService) { }

  notify(message: any) {
    if (this.isLoggedIn) {
      this.messageSource.next('true');
    } else {
      this.messageSource.next('false');
    }
  }

  /**
   * handle login function
   * @param credential
   */

  login(credential: AuthLoginInfo): Observable<boolean> {
    console.log(credential)
    return this.apiService.post('authenticate', false, credential)

      .pipe(
        tap(token => this.doLoginUser(credential.username, token.jwt,token.traceId,token.role)),
       // tap(token => console.log(token.sequence)),
        mapTo(true),
        catchError((this.errorHandler)
          //catchError(this.handleError)
        ));
  }


  getBankUserDetails(userName: string): Observable<any> {
    console.log(userName);
    return this.http.get(`${url.bankUserDetials}` + `${userName}` + '/branch?traceId=' + `${localStorage.getItem('traceId')}`, { headers: this.apiService. getAuthorizationHeaderToken() });
  }


  /**
   * this methos handle logout function
   */
  logout() {
    this.doLogoutUser();
  }

  /**
   * this method handle API errors
   * @param error
   */
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  /**
   * handle login function
   * @param username
   * @param token
   */


  //  (username: string, token: string,sequence: string)
  private doLoginUser(username: string, token: string,traceId: string, role:string) {
    localStorage.setItem(this.USERNAME, username);
    localStorage.setItem(this.JWT_TOKEN, token);
    localStorage.setItem(this.ROLE, 'bankuser');
    localStorage.setItem(this.BANKUSERROLE, role)
    localStorage.setItem(this.TRACEID, traceId)
//reguser --> bankuser
  }
  /**
   * retrieve stored token when need
   */
  getJWTToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  /**
   * retrieve stored userID when need
   */
  getUserId() {
    return localStorage.getItem(this.USER_ID);
  }

  /**
   * retrieve stored userID when need
   */
  getUserName() {
    return localStorage.getItem(this.USERNAME);
  }

  /**
   * check whether user is login or not
   */
  isLoggedIn() {
    return !!this.getJWTToken();
  }

  /**
   * handle logout function
   */
  doLogoutUser() {
    localStorage.removeItem('username');
    localStorage.removeItem(this.USER_ID);
    localStorage.removeItem('role');
    localStorage.removeItem('branchCode');
    localStorage.removeItem('branchName');
    localStorage.removeItem('bankUserRole')
    localStorage.removeItem('traceId');
    this.removeTokens();

  }

  /**
   * remove stored token when logout
   */
  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  /**
   * retrieve user details after login process success
   * @param username
   */
  getUser(username: string) {

    var params = {
      usr_nam: username,
    }
    return this.apiService.get('/app-service/app/get-by-id', true, params);
  }


  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

}
