import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class CmsInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request.url, localStorage.getItem('haus-adminToken'));
    if (request.url.includes('/cms/')) {
      console.log('set header');
      request = request.clone({
        setHeaders: {
          Authorization: `${localStorage.getItem('haus-adminToken')}`,
        },
      });
    }

    console.log(request);

    return next.handle(request);
  }
}
