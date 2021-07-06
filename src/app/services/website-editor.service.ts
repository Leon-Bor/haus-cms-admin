import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SocketMessage } from '../../../../haus-cms/src/models/classes/socket-message.model';
import { SocketRoutes } from '../../../../haus-cms/src/models/enums/socket-routes.enum';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root',
})
export class WebsiteEditorService {
  pages = new BehaviorSubject<string[]>([]);
  components = new BehaviorSubject<string[]>([]);
  assets = new BehaviorSubject<string[]>([]);

  constructor(private socketService: SocketService) {
    this.socketService.on(
      SocketRoutes.SC_LIST_PAGE,
      (m: SocketMessage<string[]>) => {
        this.pages.next(m.data);
      }
    );
    this.socketService.on(
      SocketRoutes.SC_LIST_COMPONENT,
      (m: SocketMessage<string[]>) => {
        this.components.next(m.data);
      }
    );
    this.socketService.on(
      SocketRoutes.SC_LIST_ASSET,
      (m: SocketMessage<string[]>) => {
        this.assets.next(m.data);
      }
    );
  }

  getAll() {
    this.getPages();
    this.getComponents();
    this.getAssets();
  }

  getPages() {
    this.socketService.emit(SocketRoutes.CS_LIST_PAGE, new SocketMessage());
  }
  getComponents() {
    this.socketService.emit(
      SocketRoutes.CS_LIST_COMPONENT,
      new SocketMessage()
    );
  }
  getAssets() {
    this.socketService.emit(SocketRoutes.CS_LIST_ASSET, new SocketMessage());
  }
}
