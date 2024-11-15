import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

/**
 * service class which intercept all the http call
 *  
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('JWT_TOKEN'))
      .set('user', localStorage.getItem('username'))
      .set('Content-Type', 'application/json')
     
  }

  getAuthorizationHeaderToken(): HttpHeaders {
    return new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('JWT_TOKEN'))
     .set('user', localStorage.getItem('username'))
      .set('Content-Type', 'application/json')
      
  }
  getAuthorizationHeaderWithRole(): HttpHeaders {
    return new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('JWT_TOKEN'))
      .set('user', localStorage.getItem('username'))
      .set('role', localStorage.getItem('role'))
      .set('Content-Type', 'application/json')
    
  }

  getAuthorizationHeaderWithBranchCode(): HttpHeaders {
    return new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('JWT_TOKEN'))
      .set('branchCode', localStorage.getItem('branchCode'))
      .set('Content-Type', 'application/json')
      
  }

  getContentType(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }
  getUserHeader(): HttpHeaders {
    return new HttpHeaders().set('user', localStorage.getItem('username'));
  }

  /**
   * this method handle all the GET http request
   * @param route 
   * @param headers 
   * @param params 
   */
  get(route, headers = true, params = null): Observable<any> {

    if (headers) {
      return this.httpClient.get(environment.apiUrl + route, { headers: this.getAuthorizationHeader(), params: params });
    } else {
      return this.httpClient.get(environment.apiUrl + route, { headers: this.getContentType(), params: params });
    }
  }

  /**
   * this method handle all the POST http request
   * @param route 
   * @param headers 
   * @param params 
   * @param type 
   */
  post(route, headers, params = null, type = 'json'): Observable<any> {

    let parameters = null;
    if (type === 'json') {
      parameters = params ? JSON.stringify(params) : null;
    } else {
      parameters = params ? params : null;
    }

    if (headers) {
      return this.httpClient.post(environment.apiUrl + route, parameters, { headers: this.getAuthorizationHeader() });
    } else {
      return this.httpClient.post(environment.apiUrl + route, parameters, { headers: this.getContentType() });
    }
  }

  /**
   * 
   * @param route this method handle all the GET method for blob data type
   * @param headers 
   * @param params 
   */
  blobGet(route, headers = true, params = null) {
    return this.httpClient.post(environment.apiUrl + route, params, { observe: 'response', responseType: 'blob', headers: this.getAuthorizationHeader() });
  }
}
