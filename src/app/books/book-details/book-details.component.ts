import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../shared/book";
import {BookStoreService} from "../../shared/book-store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book$: Observable<Book>;

  constructor(private service: BookStoreService, private route: ActivatedRoute, private router: Router) {
    const isbn = this.route.snapshot.paramMap.get('isbn')!; //Durch ein Ausrufezeichen versichern wir dem Compiler, dass der Typ null nicht vorkommen wird. Für die ISBN wird danach nur noch vom Typ string ausgegangen. Bitte verwenden Sie die Non-Null Assertion sehr sparsam.
    this.book$ = this.service.getSingle(isbn);
  }

  removeBook(isbn: string) {
    if (window.confirm('Remove Book?')) {
      this.service.remove(isbn).subscribe(() => {
        this.router.navigateByUrl('/books');
      });
    }
  }
}
