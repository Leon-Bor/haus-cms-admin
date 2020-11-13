import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-upload-zip',
  templateUrl: './upload-zip.component.html',
  styleUrls: ['./upload-zip.component.scss'],
})
export class UploadZipComponent implements OnInit {
  constructor(public ref: NbDialogRef<any>) {}

  ngOnInit(): void {}
  close(): void {
    this.ref.close();
  }
}
