import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms/'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';

// Services
import { BookService } from './services/book.service';
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BookFormComponent,
    BookListComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
