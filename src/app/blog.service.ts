import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private firestore: AngularFirestore) { }

  // Método para obtener la lista de las últimas publicaciones
  getLatestPosts(limit: number): Observable<any[]> {
    return this.firestore.collection('posts', ref => ref.orderBy('date', 'desc').limit(limit)).valueChanges()
      .pipe(
        tap(posts => console.log('Posts received:', posts)),
        catchError(error => {
          console.error('Error fetching posts:', error);
          throw error;
        })
      );
  }
  
}
