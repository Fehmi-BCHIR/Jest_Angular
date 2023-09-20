import 'zone.js';
import 'zone.js/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Book } from '../../cart/book';
import { Cart } from '../../cart/cart';
import { BookListComponent, BookListModule } from './book-list.component';
import { By } from '@angular/platform-browser';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe('BookListComponent', () => {
  let xp: Book;
  let leanStartup: Book;
  let cart: Cart;
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  function byDataRole(dataRole: string) {
    return By.css(`[data-role="${dataRole}"]`);
  }

  function getTitleList() {
    const titleElementList = fixture.debugElement.queryAll(
      byDataRole('book-title')
    );

    return titleElementList.map((element) => element.nativeElement.textContent);
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BookListModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    xp = new Book('eXtreme Programming Explained', 'Kent Beck');
    leanStartup = new Book('Lean Startup', 'Eric Ries');

    cart = TestBed.get(Cart);
  });

  it('should display books', () => {
    component.bookList = [xp, leanStartup];

    fixture.detectChanges();

    const titleList = getTitleList();

    expect(titleList).toEqual([
      'eXtreme Programming Explained',
      'Lean Startup',
    ]);
  });

  it('should add book to cart', () => {
    component.bookList = [xp, leanStartup];

    fixture.detectChanges();

    const buttonList = fixture.debugElement.queryAll(byDataRole('buy-button'));
    buttonList[0].triggerEventHandler('click', {});

    expect(cart.getBookList()).toEqual([xp]);
  });
});
