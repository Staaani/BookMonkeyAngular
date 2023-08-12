import {Component, EventEmitter, Output} from '@angular/core';
import {Book} from "../../shared/book";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

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
    const authors = formValue.authors.filter(author => !!author);
    const newBook: Book = {
      ...formValue,
      authors
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
    thumbnailUrl: new FormControl('', {nonNullable: true}),
    authors: new FormArray([
      new FormControl('', {nonNullable: true})
    ])
  });

  get authors() {
    return this.form.controls.authors;
  }

  addAuthorControl() {
    this.authors.push(
      new FormControl('', {nonNullable: true})
    );
  }
}
