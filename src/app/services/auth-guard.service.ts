import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router, private authService: AuthService) {}
  canActivate(): Observable<boolean> | boolean {
    if (this.authService.isAuthenticated) {
      // this.router.navigate(['login']);
      return true;
    } else {
      console.log('loading...');
      return new Observable<boolean>((observer) => {
        console.log('done!');
        this.authService
          .login()
          .then((isAuth) => {
            observer.next(isAuth);
            observer.complete();
          })
          .catch(() => {
            observer.next(false);
            observer.complete();
          });
      });
    }
  }
}
