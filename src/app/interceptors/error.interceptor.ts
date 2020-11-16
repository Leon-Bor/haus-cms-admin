import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(public toastrService: NbToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          this.toastrService.show(`${error?.error?.message}`, 'Client Error', { status: 'danger' });
        } else {
          this.toastrService.show(`${error?.error?.message}`, 'Server Error', { status: 'danger' });
        }
        return throwError(error?.error?.message);
      })
    );
  }
}
