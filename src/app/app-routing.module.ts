import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importaciones para la página de inicio.
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';

//Importación para los comentarios de cada post.
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'comments/:postId', component: CommentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
