import { TestBed } from '@angular/core/testing';
import { Book } from './book';
import { Cart } from './cart';

describe('Cart', () => {
  let cart: Cart;
  beforeEach(() => (cart = TestBed.get(Cart)));

  xit('should add book', () => {
    const xp = new Book('Javascript Programming Explained', 'Kent Beck');
    const leanStartup = new Book('Lean Startup', 'Eric Ries');

    cart.addBook(xp);
    cart.addBook(leanStartup);

    const bookList = cart.getBookList();

    expect(bookList).toEqual([xp, leanStartup]);
  });

  it.todo('should remove book');

  it.todo('should get total price');
});
