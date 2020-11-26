import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { FileUploader } from 'ng2-file-upload';

const URL = `${environment.backendUrl}/cms/upload-template`;

@Component({
  selector: 'app-upload-zip',
  templateUrl: './upload-zip.component.html',
  styleUrls: ['./upload-zip.component.scss'],
})
export class UploadZipComponent implements OnInit {
  fileData: File = null;
  uploadedPercentage = 0;
  uploadedFilePath: string = null;
  disableButtons = false;
  progressBarStatus = 'basic';

  constructor(public ref: NbDialogRef<any>, private http: HttpClient, private toastrService: NbToastrService) {}

  ngOnInit(): void {}

  onFileChange(fileInput: any): void {
    this.fileData = fileInput.target.files[0] as File;
  }

  onUpload(): void {
    this.disableButtons = true;
    const formData = new FormData();
    formData.append('file', this.fileData);

    this.uploadedPercentage = 0;

    this.http
      .post(URL, formData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe(
        (events) => {
          if (events.type === HttpEventType.UploadProgress) {
            this.uploadedPercentage = Math.round((events.loaded / events.total) * 100);
          } else if (events.type === HttpEventType.Response) {
            this.uploadedPercentage = 0;
            this.disableButtons = false;
            // this.ref.close();
            this.toastrService?.show(`Your template has been uploaded successfully!`, 'File Uploaded', { status: 'success' });
          }
        },
        (error) => {
          console.log(error);
          this.progressBarStatus = 'danger';
          this.disableButtons = false;
        }
      );
  }

  close(): void {
    this.ref.close();
  }
}
