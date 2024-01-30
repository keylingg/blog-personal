import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Importaciones de Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/enviorenments/enviorenment';

import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';

//Importaciones de los componentes Home y Lista de Posts. 
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostListComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@NgModule({
  imports: [
    BrowserModule,
    
    // Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule, 
    AngularFirestoreModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
