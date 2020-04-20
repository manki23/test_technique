import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Articles } from './articles';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://127.0.0.1:8000/api/articles/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getArticles(): Observable<Articles[]> {
    return this.http.get<Articles[]>(`${apiUrl}`)
      .pipe(
        tap(articles => console.log('fetched articles')),
        catchError(this.handleError('getArticles', []))
      );
  }

  getArticlesById(id: string): Observable<Articles> {
    const url = `${apiUrl}${id}`;
    return this.http.get<Articles>(url).pipe(
      tap(_ => console.log(`fetched articles id=${id}`)),
      catchError(this.handleError<Articles>(`getArticlesById id=${id}`))
    );
  }

  addArticles(articles: Articles): Observable<Articles> {
    return this.http.post<Articles>(apiUrl, articles, httpOptions).pipe(
      tap((c: Articles) => console.log(`added articles w/ id=${c._id}`)),
      catchError(this.handleError<Articles>('addArticles'))
    );
  }

  updateArticles(id: string, articles: Articles): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, articles, httpOptions).pipe(
      tap(_ => console.log(`updated articles id=${id}`)),
      catchError(this.handleError<any>('updateArticles'))
    );
  }

  deleteArticles(id: string): Observable<Articles> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Articles>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted articles id=${id}`)),
      catchError(this.handleError<Articles>('deleteArticles'))
    );
  }
}