import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Book } from '../../cart/book';
import { Cart } from '../../cart/cart';
import { CommonModule } from '@angular/common';
import { BookPreviewModule } from '../book-preview/book-preview.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  @Input() bookList: Book[];

  constructor(private _cart: Cart) {}

  ngOnInit() {}

  buyBook(book: Book) {
    this._cart.addBook(book);
  }
}

@NgModule({
  declarations: [BookListComponent],
  exports: [BookListComponent],
  imports: [BookPreviewModule, CommonModule],
})
export class BookListModule {}
