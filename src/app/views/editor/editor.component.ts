import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  previewUrl = 'https://sterni-bingo.de';
  previewStyles = { width: '420px' };
  breakpoints = [320, 375, 420, 480, 568, 667, 768, 992, 1024, 1280, 1366, 1440, 1680, 1920];
  constructor() {}

  ngOnInit(): void {}

  onResizeIframe(action): void {
    const width = document.getElementById('preview').offsetWidth + 2;
    let newWidth = 420;
    switch (action) {
      case 'min':
        newWidth = this.breakpoints.findIndex((w) => w === width);
        this.previewStyles.width = `${this.breakpoints?.[newWidth - 1] ? this.breakpoints?.[newWidth - 1] : 320}px`;
        break;
      case 'max':
        newWidth = this.breakpoints.findIndex((w) => w === width);
        this.previewStyles.width = `${this.breakpoints?.[newWidth + 1] ? this.breakpoints?.[newWidth + 1] : 320}px`;
        break;
      case 'phone':
        this.previewStyles.width = `${420}px`;
        break;
      case 'desktop':
        this.previewStyles.width = `${1280}px`;
        break;

      default:
        break;
    }
  }
}
