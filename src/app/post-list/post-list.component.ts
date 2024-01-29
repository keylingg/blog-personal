import { Component,  OnInit } from '@angular/core';
//Importación del servicio blog
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getPosts().subscribe(posts => {
      console.log(posts); // Puedes actualizar esta lógica para mostrar las publicaciones en tu componente.
    });
  }
}
