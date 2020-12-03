import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CodeEditorService {
  drafts = {};
  readonly currentFile = new BehaviorSubject(null);

  constructor(private http: HttpClient, private toastrService: NbToastrService) {}

  setCurrentFile(file): void {
    const draftName = file?.type + '#' + file?.id;
    if (this.drafts[draftName]) {
      this.currentFile.next(this.drafts[draftName].file);
    } else {
      this.currentFile.next(file);
    }
  }

  addCurrentFileToDraft(value, undoManager): void {
    const file = this.currentFile.value;
    file.value = value;
    const draftName = file?.type + '#' + file?.id;
    this.drafts[draftName] = { file, undoManager };
  }

  saveDraft(): void {
    const file = this.currentFile.value;
    this.http.patch(`${environment.backendUrl}/cms/${file?.type}s/${file?.id}`, file).subscribe(
      () => {
        // success

        this.toastrService?.show(`Your template has been saved successfully`, 'Template saved', { status: 'success' });
      },
      () => {
        // error

        this.toastrService?.show(`Saving file failed`, 'File Uploaded', { status: 'danger' });
      }
    );
  }
  deleteDraft(): void {}
}
