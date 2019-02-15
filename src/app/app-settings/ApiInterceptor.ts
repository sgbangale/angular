import { Injectable } from "@angular/core";
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Apply the headers
    if(req.url.indexOf('/account/token') == -1)
    req = req.clone({
      setHeaders: {
        'token':  localStorage.getItem('token')
      }
    });
    return next.handle(req);
  }
}