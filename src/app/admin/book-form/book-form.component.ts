import {Component, EventEmitter, Output} from '@angular/core';
import {Book} from "../../shared/book";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  book: Book = {
    isbn: '',
    title: '',
    authors: ['']
  };

  @Output() submitBook = new EventEmitter<Book>();

  submitForm() {
    const formValue = this.form.getRawValue();
    const newBook: Book = {
      ...formValue,
      authors: [] //TODO: echte Eingaben
    };
    this.submitBook.emit(newBook);
  }

  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    subtitle: new FormControl('', {nonNullable: true}),
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]
    }),
    description: new FormControl('', {nonNullable: true}),
    published: new FormControl('', {nonNullable: true}),
    thumbnailUrl: new FormControl('', {nonNullable: true})
  });
}
