import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Service
import { BookService } from 'src/app/services/book.service'

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

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

  constructor(
    private bookService: BookService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.bookService.getBookById(params.id).subscribe(
        res => { 
          this.book = res;
        },
        err => console.error(err)
      );
    }
  }

}
