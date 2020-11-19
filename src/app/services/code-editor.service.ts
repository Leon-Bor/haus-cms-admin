import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodeEditorService {
  drafts = {};
  readonly currentFile = new BehaviorSubject(null);

  constructor() {}

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
}
