import {
  Injectable,
  Inject
} from '@angular/core';
import {
  LoginRequest,
  Token,
  ViewRequest
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
export class RequestService {

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  view(viewReq: ViewRequest, entity__access: string): Observable < any > {
    let req = new HttpRequest < any > (
      'POST',
      `${this.config.rootUrl}request?request_type=${entity__access}`,
      {request_data	:viewReq} ,
      this.httpOptions
    );
    return this.http.request < any > (req).pipe(
      filter(data => data instanceof HttpResponse), // filter out the unknown response.
      map(data => {
        let resp = data as HttpResponse < any > ;
        return resp.clone() as HttpResponse < any > ;
      })
    );
  }
}
