import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private firestore: AngularFirestore) { }

  getPosts(): Observable<any[]> {
    return this.firestore.collection('posts').valueChanges();
  }
}
