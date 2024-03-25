import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackbarService } from '../../services/helpers/snackbar.service';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private _snackbarService: SnackbarService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          this._snackbarService.openCustomSnackbar('A API está offline! Não será possível prosseguir.');
        }
        return throwError(error);
      })
    );
  }
}