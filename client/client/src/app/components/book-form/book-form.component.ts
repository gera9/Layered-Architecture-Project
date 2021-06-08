import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Service
import { BookService } from 'src/app/services/book.service'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  public book: any = {
    _id: '',
    title: '',
    authors: '',
    publisher: '',
    publishedDate: '',
    description: '',
    image: '',
    previewLink: '',
  };

  public edit: boolean = false;

  constructor(
    private bookService: BookService,
    private route: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.bookService.getBookById(params.id).subscribe(
        res => { 
          this.book = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  public saveNewBook() {
    delete this.book._id;
    this.bookService.addBook(this.book).subscribe(
      res => {
        this.route.navigate(['libros/']);
      },
      err => console.error(err)
    );
  }

  public updateBook() {
    this.bookService.updateBookById(this.book._id, this.book).subscribe(
      res => {
        this.route.navigate(['libros/']);
      },
      err => console.error(err)
    );
  }
}
