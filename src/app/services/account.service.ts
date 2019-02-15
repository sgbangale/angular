import {
  Injectable,
  Inject
} from '@angular/core';
import {
  LoginRequest,
  Token
} from 'src/models/login';

import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

import {
  map,
  filter
} from 'rxjs/operators';
import {
  Observable
} from 'rxjs';
import {
  APP_CONFIG,
  AppConfig
} from '../app-settings/app-settings.module';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  token(tokenReq: LoginRequest): Observable < any > {
    let req = new HttpRequest < LoginRequest > (
      'POST',
      `${this.config.rootUrl}account/`,
      tokenReq,
      this.httpOptions
    );
    return this.http.request < Token > (req).pipe(
      filter(data => data instanceof HttpResponse), // filter out the unknown response.
      map(data => {
          let resp = data as HttpResponse < any > ;
          if (resp.ok && resp.body.isSucess) {
            localStorage.clear();
            Object.keys(resp.body.body).map(key => localStorage.setItem(key, resp.body.body[key]));
          } 
          return resp.clone() as HttpResponse < any > ;
        }
      )
  );
}
}
