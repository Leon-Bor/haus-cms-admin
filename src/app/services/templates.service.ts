import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TemplatesService {
  readonly templates = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  getTemplates(): void {
    console.log('get tempalte');
    this.http.get(`${environment.backendUrl}/cms/templates`).subscribe((data: any) => {
      console.log('data', data);
      this.templates.next(data);
    });
  }
}
