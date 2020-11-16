import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TemplatesService {
  constructor(private http: HttpClient) {}

  getTemplates(): void {
    console.log('get tempalte');
    this.http.get(`${environment.backendUrl}/cms/templates`).subscribe((data) => {
      console.log('data', data);
    });
  }
}
