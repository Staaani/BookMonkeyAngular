import {Component, EventEmitter, Output} from '@angular/core';
import {Book} from "../../shared/book";
import {BookStoreService} from "../../shared/book-store.service";
import {Observable} from "rxjs";

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private service: BookStoreService) {
    //debugger;
    this.books$ = this.service.getAll();
  }
}
