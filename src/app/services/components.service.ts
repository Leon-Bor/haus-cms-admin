import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  readonly components = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  list(): void {
    this.http.get(`${environment.backendUrl}/cms/components`).subscribe((data: any) => {
      this.components.next(data);
    });
  }
}
