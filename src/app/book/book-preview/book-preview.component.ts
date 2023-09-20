import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { Book } from 'src/app/cart/book';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent {
  @Input() book: Book;
}

@NgModule({
  declarations: [BookPreviewComponent],
  exports: [BookPreviewComponent],
  imports: [CommonModule],
})
export class BookPreviewModule {}
