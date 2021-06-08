import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Import book model
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_URI = 'http://localhost:5000/books';

  constructor(
    private _http: HttpClient
    ) { }

  public getBooks() {
    return this._http.get(`${this.API_URI}`);
  }

  public getBookById(id: string) {
    return this._http.get(`${this.API_URI}/${id}`);
  }

  public addBook(game: Book) {
    return this._http.post(`${this.API_URI}`, game);
  }

  public deleteBookById(id: string) {
    return this._http.delete(`${this.API_URI}/${id}`);
  }

  public updateBookById(id: string, updatedBook: Book) {
    return this._http.put(`${this.API_URI}/${id}`, updatedBook); 
  }
}
