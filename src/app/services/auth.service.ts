import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('haus-editKey')) {
      this.login();
    }
  }

  login(): Promise<boolean> {
    return new Promise((res, rej) => {
      this.http.get(`${environment.backendUrl}/cms/auth`).subscribe(
        (data: any) => {
          console.log(data);
          this.isAuthenticated = data;

          if (this.router.url === '/login') {
            if (this.isAuthenticated) {
              this.router.navigate(['']);
            }
          }

          res(data);
        },
        (e) => {
          rej(false);
          console.log(e);
          this.router.navigate(['login']);
        }
      );
    });
  }
}
