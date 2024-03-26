import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackbarService } from '../services/helpers/snackbar.service';
import { Router } from '@angular/router';


@Injectable()
export class ApiErrorsInterceptor implements HttpInterceptor {

  constructor(private _snackbarService: SnackbarService,
    private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const status = error.status;
        const message = error.message;

        if (status === 0) {
          this.apresentarMensagem('A API está offline! Não será possível prosseguir.', 10000)
        }
        if (status === 401) {
          this.apresentarMensagem('O usuário não está autenticado.')
          localStorage.removeItem('authToken')
          this.router.navigate(['/login']);
        } else if (status === 404) {
          this.apresentarMensagem('Erro 404. Recurso não encontrado!');
        } else {

          this.apresentarMensagem('Houve um erro na requisição.');
        }
        console.log('Erro na requisição:', [status, message, error]);
        return throwError(error);
      })
    );
  }

  apresentarMensagem(mensagem: string, tempo: number = 3000) : void{
    this._snackbarService.openCustomSnackbar(mensagem, '', tempo);
  }
  
}