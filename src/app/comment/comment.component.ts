import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  postId: number;

  constructor(private route: ActivatedRoute) {
    const postIdString = this.route.snapshot.paramMap.get('postId');
    this.postId = postIdString ? parseInt(postIdString, 10) : 0;
  }
}

