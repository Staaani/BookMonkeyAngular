import {Injectable} from '@angular/core';
import {Book} from "./book";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private apiURL = 'https://api5.angular-buch.com';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiURL}/books`).pipe(
      catchError(err => {
        console.error(err);
        return of([]);
      })
    );
  }

  getAllSearch(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiURL}/books/search/${term}`).pipe(
      catchError(err => {
        console.error(err);
        return of([]);
      })
    );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiURL}/books/${isbn}`);
  }

  remove(isbn: string): Observable<unknown> {
    return this.http.delete(`${this.apiURL}/books/${isbn}`);
  }

}


