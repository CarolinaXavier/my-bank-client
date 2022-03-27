import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private readonly apiURL: string;
    private readonly headers = { 'Content-Type': 'application/json' }

    constructor(private httpClient: HttpClient) {
        this.apiURL = 'api/';
    }

    public get(url: string): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiURL + url, {
            headers: this.headers
        }).pipe(
            catchError(this.handleError<any[]>('get', []))
        );
    }

    public getOne(url: string, _id: any): Observable<any> {
        const _url = `${this.apiURL + url}/${_id}`;
        return this.httpClient.get<any>(_url).pipe(
            catchError(this.handleError<any>(`getOne _id=${_id}`))
        );
    }

    public put(url: string, data: any): Observable<any> {
        return this.httpClient.put(this.apiURL + url, data, {
            headers: this.headers
        }).pipe(
            catchError(this.handleError<any>('put'))
        );
    }

    public post(url: string, data: any): Observable<any> {
        return this.httpClient.post<any>(this.apiURL + url, data, {
            headers: this.headers
        }).pipe(
            catchError(this.handleError<any>('post'))
        );
    }

    public delete(url: string, data: any | number): Observable<any> {
        const _id = typeof data === 'number' ? data : data._id;
        const _url = `${this.apiURL + url}/${_id}`;
        return this.httpClient.delete<any>(_url, {
            headers: this.headers
        }).pipe(
            catchError(this.handleError<any>(`delete id=${data.id}`))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}