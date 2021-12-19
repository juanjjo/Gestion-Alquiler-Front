import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUser } from '../_models/loginuser';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiLogin = environment.apiURL + 'auth/login';
  // apiLogin = "http://localhost:8000/api/auth/login";
  constructor(private http: HttpClient) {}

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  loginUser(usuario: string, password: string): Observable<any> {
    return this.http
      .post<LoginUser>(
        this.apiLogin,
        { usuario, password },
        { headers: this.headers }
      )
      .pipe(map(success => success.success));
  }
}
