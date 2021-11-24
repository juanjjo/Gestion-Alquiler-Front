import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiLogin = environment.apiURL+"auth/login";
constructor(private http : HttpClient) { }

loginUser(usuario: string, password: string): Observable<any> {
  const httpOptions = {
    headers : new HttpHeaders({
      "Content-Type": "application/json",
    })
  }
  return this.http.post(this.apiLogin,{usuario,password },httpOptions);
}
}
