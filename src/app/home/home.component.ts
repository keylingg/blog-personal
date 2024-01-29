import { Component, OnInit  } from '@angular/core';
//Importación del servicio blog
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }
}
