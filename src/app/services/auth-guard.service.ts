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
      return true;
    } else {
      return new Observable<boolean>((observer) => {
        if (localStorage.getItem('haus-adminToken')) {
          observer.next(true);
          observer.complete();
        } else {
          observer.next(false);
          this.router.navigate(['login']);
          observer.complete();
        }
      });
    }
  }
}
