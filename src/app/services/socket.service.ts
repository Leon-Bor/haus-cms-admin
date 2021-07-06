import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Socket } from 'ngx-socket-io';
import { SocketRoutes } from '../../../../haus-cms/src/models/enums/socket-routes.enum';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private socket: Socket, public toastrService: NbToastrService) {
    if (environment.production === false) {
      Object.keys(SocketRoutes)
        .filter((k) => k.startsWith('SC_'))
        .map((k) => {
          this.socket.on(k, (d) => {
            if (d.status > 399) {
              console.error('Socket on: ' + k, d);
            } else {
              console.log('Socket on: ' + k, d);
            }
          });
        });
    }
  }

  on(eventName: SocketRoutes, cb: (data) => void): void {
    this.socket.on(eventName, (m) => {
      if (m.status > 399) {
        this.toastrService.show(`${m.data}`, 'Server Error', {
          status: 'danger',
        });
      } else {
        return this.socket.on(eventName, cb);
      }
    });
  }

  emit(eventName: SocketRoutes, data): void {
    if (environment.production === false) {
      console.log('Socket emit: ' + eventName, data);
    }
    return this.socket.emit(eventName, data);
  }
}
