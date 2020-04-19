import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';
import { AddArticlesComponent } from './add-articles/add-articles.component';
import { EditArticlesComponent } from './edit-articles/edit-articles.component';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticlesComponent,
    data: { title: 'List of Articles' }
  },
  {
    path: 'articles-details/:id',
    component: ArticlesDetailsComponent,
    data: { title: 'Articles Details' }
  },
  {
    path: 'add-articles',
    component: AddArticlesComponent,
    data: { title: 'Add Articles' }
  },
  {
    path: 'edit-articles/:id',
    component: EditArticlesComponent,
    data: { title: 'Edit Articles' }
  },
  { path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
