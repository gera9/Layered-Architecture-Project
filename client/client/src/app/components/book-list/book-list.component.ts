import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';

// Importing book service
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public books: any = [];

  constructor(
    private bookService: BookService
    ) { }

  ngOnInit(): void {
    this.getGames();
  }

  public getGames() {
    this.bookService.getBooks().subscribe(
      res => {
        this.books = res;
      },
      err => console.log(err)
    );
  }

  public deleteBook(_id: string) {
    this.bookService.deleteBookById(_id).subscribe(
      res => {
        console.log(res);
        this.getGames();
      },
      err => console.error(err)
    );
  }
}