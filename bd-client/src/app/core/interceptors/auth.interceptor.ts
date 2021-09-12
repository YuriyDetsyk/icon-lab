import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly domainRegex = /.*.?(bubble-doodle\.com|icon-lab\.co|(bd-api-(dev|prod).herokuapp.com))/;

  constructor(private readonly router: Router) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.addAuthenticationToken(req);

    return next.handle(req).pipe(catchError((error: HttpErrorResponse) => this.handleAuthError(error, req)));
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    if (!request.url.match(this.domainRegex)) {
      return request;
    }

    return (request = request.clone({
      withCredentials: true,
    }));
  }

  private handleAuthError(res: HttpErrorResponse, req: HttpRequest<any>): Observable<any> {
    switch (res.status) {
      case 403:
        this.router.navigate([''], { queryParams: { redirectUrl: req.url } });
        console.error(res);
        return EMPTY;

      case 401:
        return throwError(res.error);

      default:
        return throwError(res);
    }
  }
}
