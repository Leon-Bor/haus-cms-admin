import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Ace } from 'ace-builds';
import { ResizeEvent } from 'angular-resizable-element';
import { AceConfigInterface } from 'ngx-ace-wrapper';
import { UploadZipComponent } from '../../components/dialogs/upload-zip/upload-zip.component';
// import 'brace/theme/nord_dark';
// import 'brace/mode/javascript';
declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, AfterViewInit {
  previewUrl = 'https://sterni-bingo.de';
  previewStyles = { width: '420px' };
  breakpoints = [320, 375, 420, 480, 568, 667, 768, 992, 1280, 1366, 1440, 1680, 1920];
  @ViewChild('editor') editor;
  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.editor = ace.edit('editor');

    this.editor.setOptions({
      showLineNumbers: true,
      tabSize: 2,
      // width: '100%',
    });

    // this.editor.mode = 'javascript';
    this.editor.setValue(`function testThis() {
      console.log("it's working!")
  }`);

    // this.editor.setTheme('nord_dark');
    this.editor.setTheme('ace/theme/dracula');
    this.editor.session.setMode('ace/mode/javascript');
    this.editor.setShowPrintMargin(false);
  }

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
    this.editor.resize();
  }

  onOpenUpload(): void {
    this.dialogService.open(UploadZipComponent, { context: 'this is some additional data passed to dialog' });
  }
}
