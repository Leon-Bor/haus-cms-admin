import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('haus-editKey')) {
      this.login();
    }
  }

  login(): Promise<boolean> {
    return new Promise((res, rej) => {
      this.http.get(`${environment.backendUrl}/cms/auth`).subscribe((data: any) => {
        this.isAuthenticated = data;
        res(data);
      });
    });
  }
}
