import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  readonly files = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  getFiles(): void {
    this.http.get(`${environment.backendUrl}/cms/files`).subscribe((data: any) => {
      this.files.next(data);
    });
  }
}
