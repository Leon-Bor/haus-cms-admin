import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Ace } from 'ace-builds';
import { ResizeEvent } from 'angular-resizable-element';
import { AceConfigInterface } from 'ngx-ace-wrapper';
import { environment } from '../../../environments/environment';
import { UploadZipComponent } from '../../components/dialogs/upload-zip/upload-zip.component';
import { CodeEditorService } from '../../services/code-editor.service';
// import 'brace/theme/nord_dark';
// import 'brace/mode/javascript';
declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, AfterViewInit {
  previewUrl = environment.backendUrl;
  previewStyles = { width: '420px' };
  breakpoints = [320, 375, 420, 480, 568, 667, 768, 992, 1280, 1366, 1440, 1680, 1920];
  @ViewChild('editor') editor;
  constructor(private dialogService: NbDialogService, private codeEditorService: CodeEditorService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.editor = ace.edit('editor');

    this.editor.setOptions({
      showLineNumbers: true,
      tabSize: 2,
      // width: '100%',
    });

    this.editor.setTheme('ace/theme/nord_dark');
    // this.editor.setTheme('ace/theme/dracula');
    this.editor.setShowPrintMargin(false);

    this.codeEditorService.currentFile.subscribe((file) => {
      const type = file?.id?.split('.')[1];
      if (file) {
        switch (type) {
          case 'js':
            this.editor.setSession(new ace.createEditSession(file?.value, 'ace/mode/javascript'));
            break;
          case 'html':
            this.editor.setSession(new ace.createEditSession(file?.value, 'ace/mode/html'));
            break;
          case 'css':
            this.editor.setSession(new ace.createEditSession(file?.value, 'ace/mode/css'));
            break;
          default:
            // this.editor.setSession(new ace.createEditSession(file?.value, 'ace/mode/plain_text'));
            break;
        }
        if (file.type === 'component') {
          this.editor.getSession().setUseWorker(false);
        }
        this.editor.getSession().on('change', (e) => {
          this.codeEditorService.addCurrentFileToDraft(this.editor.getValue(), this.editor.getSession().getUndoManager());
        });
      }
    });

    this.editor.on('changeSession', (e) => {
      const currentFile = this.codeEditorService.currentFile.value;
      const draftName = currentFile?.type + '#' + currentFile?.id;
      const draft = this.codeEditorService.drafts[draftName];
      if (draft) {
        this.editor.getSession().setUndoManager(draft.undoManager);
      }
    });
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

  isDraft(): boolean {
    const currentFile = this.codeEditorService.currentFile.value;
    const draftName = currentFile?.type + '#' + currentFile?.id;
    return !!this.codeEditorService.drafts[draftName];
  }

  saveDraft(): void {
    this.codeEditorService.saveDraft();
  }
  deleteDraft(): void {
    this.codeEditorService.deleteDraft();
  }
}
