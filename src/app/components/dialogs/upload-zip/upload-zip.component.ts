import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-upload-zip',
  templateUrl: './upload-zip.component.html',
  styleUrls: ['./upload-zip.component.scss'],
})
export class UploadZipComponent implements OnInit {
  selectedFile: File = null;
  uploadedPercentage = 0;
  showMessage = false;
  message = '';

  constructor(public ref: NbDialogRef<any>, private http: HttpClient) {}

  ngOnInit(): void {}

  onFileSelected(event): void {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload(): void {
    const fd = new FormData();
    this.showMessage = false;
    console.log(this.selectedFile.name);
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http
      .post(`http://localhost:3000/upload-file`, fd, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe(
        (event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              // this.slimLoadingBarService.start();
              break;
            case HttpEventType.Response:
              // this.slimLoadingBarService.complete();
              this.message = 'Uploaded Successfully';
              this.showMessage = true;
              break;
            case 1: {
              console.log(event);
              // if (Math.round(this.uploadedPercentage) !== Math.round((event.loaded / event.total) * 100)) {
              //   this.uploadedPercentage = (event.loaded / event.total) * 100;
              //   // this.slimLoadingBarService.progress = Math.round(this.uploadedPercentage);
              // }
              break;
            }
          }
        },
        (error) => {
          console.log(error);
          this.message = 'Something went wrong';
          this.showMessage = true;
          // this.slimLoadingBarService.reset();
        }
      );
  }

  close(): void {
    this.ref.close();
  }
}
