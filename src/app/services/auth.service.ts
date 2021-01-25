import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocketRoutes } from '../../../../haus-cms/src/models/enums/socket-routes.enum';
import { environment } from '../../environments/environment';
import { SocketService } from './socket.service';
import { SocketMessage } from '../../../../haus-cms/src/models/classes/socket-message.model';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private socketService: SocketService,
    private settingsService: SettingsService
  ) {
    if (localStorage.getItem('haus-adminToken')) {
      this.login();
    }

    this.socketService.on(SocketRoutes.SC_AUTHENTICATE, ({ data }) => {
      const { isAuthenticated, settings } = data;
      console.log('isAuthenticated', data);
      this.isAuthenticated = data;
      if (this.isAuthenticated) {
        if (window.location.href.includes('/login')) {
          this.router.navigate(['haus-admin']);
        }
      } else {
        this.router.navigate(['haus-admin', 'login']);
      }
    });
  }

  login(): void {
    this.socketService.emit(SocketRoutes.CS_AUTHENTICATE, new SocketMessage({ data: localStorage.getItem('haus-adminToken') }));
  }
}
