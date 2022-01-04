import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginUser } from 'src/app/public/login/_models/loginuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  apiLogin = environment.apiURL + 'local';
  public auth_token = 'Bearer ' + localStorage.getItem('tokens');
  // apiLogin = "http://localhost:8000/api/auth/login";
  constructor(private http: HttpClient) {}

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  getListCoporativos(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.auth_token,
      }),
    };
   return this.http.get(this.apiLogin, httpOptions)
  }

  // getListCoporativos(): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: this.auth_token,
  //     }),
  //   };
  //   return this.http.get(this.apiCorporativos, httpOptions);
  // }
}
