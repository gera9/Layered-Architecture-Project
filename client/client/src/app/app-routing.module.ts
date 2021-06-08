import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { PreviewComponent } from './components/preview/preview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/libros',
    pathMatch: 'full',
  },
  {
    path: 'libros',
    component: BookListComponent
  },
  {
    path: 'libros/agregar',
    component: BookFormComponent
  },
  {
    path: 'libros/editar/:id',
    component: BookFormComponent
  },
  {
    path: 'libros/visualizar/:id',
    component: PreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
