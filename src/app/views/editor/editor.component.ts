import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  previewUrl = 'https://sterni-bingo.de';
  previewStyles = { width: '40vw' };
  constructor() {}

  ngOnInit(): void {}

  onResizeIframe(action): void {
    const width = document.getElementById('preview').offsetWidth;
    let newWidth = 300;
    switch (action) {
      case 'min':
        newWidth = width - 100 > 300 ? width - 100 : 300;
        this.previewStyles.width = `${newWidth}px`;
        break;
      case 'max':
        newWidth = width + 100 < window.innerWidth - 400 ? width + 100 : window.innerWidth - 400;
        this.previewStyles.width = `${newWidth}px`;
        break;
      case 'phone':
        this.previewStyles.width = `${400}px`;
        break;
      case 'desktop':
        this.previewStyles.width = `${1280}px`;
        break;

      default:
        break;
    }
  }
}
