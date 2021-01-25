import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Settings } from '../../../../haus-cms/src/models/classes/settings.model';
import { SocketMessage } from '../../../../haus-cms/src/models/classes/socket-message.model';
import { SocketRoutes } from '../../../../haus-cms/src/models/enums/socket-routes.enum';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  readonly settings: BehaviorSubject<Settings> = new BehaviorSubject(new Settings((window as any)?.hausSettings || null));

  constructor(private socketService: SocketService) {
    this.settings.subscribe((s) => {
      console.log('Settings changed', s);
    });
    this.socketService.on(SocketRoutes.SC_GET_SETTINGS, ({ data }) => {
      this.settings.next(data);
    });
    this.socketService.on(SocketRoutes.SC_UPDATE_SETTINGS, ({ data }) => {
      this.settings.next(data);
    });
    this.socketService.on(SocketRoutes.SC_AUTHENTICATE, ({ data }) => {
      const { settings } = data;
      console.log(settings);
      this.settings.next(settings);
    });
  }

  setSettings(s: Settings): void {
    this.socketService.emit(SocketRoutes.CS_UPDATE_SETTINGS, new SocketMessage({ data: s }));
  }

  getSettings(): void {
    this.socketService.emit(SocketRoutes.CS_GET_SETTINGS, new SocketMessage({ data: null }));
  }
}
