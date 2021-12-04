import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/public/login/_services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.validPayload()){
        return true;
      }
      return false;
  }

  validPayload(): boolean {
    console.log(this.router.url);
    const token = localStorage.getItem('tokens');
    if(!token){
      this.router.navigate(['/']);
      sessionStorage.clear();
      return false;
    }
    return true;
  }
}
