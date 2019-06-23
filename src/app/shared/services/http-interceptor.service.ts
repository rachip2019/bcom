import { Injectable, forwardRef, Inject, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { ErrorResponse } from '../models';
//import { LoadingService } from './loading.service';
//import { AuthenticationService } from './authentication.service';
//import { AlertService } from './alert.service';
import {catchError} from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  _baseUrl: string='http://dev.sayyes.co.il/bcom/';

  constructor(
    private injector: Injector,
    private router: Router
  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
   
  let userid = -1;
  request = request.clone({
    headers:request.url.includes('http')? 
    new HttpHeaders():
    new HttpHeaders({
      'Content-Type':  'application/json',
    })
    ,
    url: request.url.includes('http')?request.url:this._baseUrl + request.url,
    });
    
    //לא תקין - לא יודעת למה - צריך בכל סרויס בנפרד
    // headers: new HttpHeaders({
    //   'Content-Type':  'application/json',
    // })

    //this._loadingService.startLoading();

    //this._loadingService.stopLoading();
    
    return next.handle(request)
    .pipe(catchError((error, caught) => {
      //intercept the respons error and displace it to the console
      console.log(error);
      this.handleAuthError(error);
      return of(error);
    }) as any);
}


  /**
   * manage errors
   * @param err
   * @returns {any}
   */
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401) {
      //navigate /delete cookies or whatever
      console.log('handled error ' + err.status);
      this.router.navigate([`/login`]);
      // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
      return of(err.message);
    }
    throw err;
  }

  private handleError(error: Response) {


    console.error(error);
    let message;
    return Observable.throw(message || 'אירעה שגיאה, נסה שנית');

  }

}
