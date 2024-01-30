import { Component,  OnInit } from '@angular/core';

//Importación del servicio blog
import { BlogService } from '../blog.service';

//Importación para navegar en rutas. 
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  latestPosts: any[] = [];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.blogService.getLatestPosts(5) // Obtener las últimas 5 publicaciones.
      .subscribe(posts => {
        this.latestPosts = posts;
      });
  }

  // Método para abrir la sección de comentarios
  openComments(postId: string): void {
    // Puedes navegar a una nueva ruta para mostrar los comentarios
    this.router.navigate(['/comments', postId]);
  }
}
