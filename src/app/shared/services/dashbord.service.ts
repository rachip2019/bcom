import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  apiURL = 'admin/api/dashboard';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    /*'Access-Control-Allow-Origin':'*' ,
    'crossDomain': 'true'*/
    })
    }  

    // HttpClient API get() method => Fetch employees list
    getData(): any {
    return this.http.get<any>(this.apiURL,{responseType: 'json'})
    .pipe(
    retry(1),
    catchError(this.handleError)
    )
    }

    getCallData(date1,date2): any {
      return this.http.get<any>(this.apiURL+'/call_data/'+date1+'/'+date2,{responseType: 'json'})
      .pipe(
      retry(1),
      catchError(this.handleError)
      )
    }

    getCallDistribution(id): any {
      return this.http.get<any>(this.apiURL+'/call_distribution/'+id,{responseType: 'json'})
      .pipe(
      retry(1),
      catchError(this.handleError)
      )
    }

    getPendingAvg(id): any {
      return this.http.get<any>(this.apiURL+'/pending_avg/'+id,{responseType: 'json'})
      .pipe(
      retry(1),
      catchError(this.handleError)
      )
    }

    // Error handling 
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
    }
}


