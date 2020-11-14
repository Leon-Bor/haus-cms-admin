import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { IconsService } from './services/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'haus-cms-editor';

  constructor(private iconsService: IconsService) {
    this.iconsService.init();
  }
}
