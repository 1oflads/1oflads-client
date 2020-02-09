import {HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {ErrorService} from '../service/ErrorService';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private errorService: ErrorService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(req)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log(err);
          const language = 'bg';
          // const serverError = 'ServerError';

          err.error.errors.forEach(e => this.toastrService.error(this.errorService.getErrorsList()[e][language]));

          return throwError(err);
        })
      );
  }
}
