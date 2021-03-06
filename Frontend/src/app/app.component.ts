import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from '@angular/fire/database-deprecated';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any>;
  // items: FirebaseListObservable <any[]>;
  msgVal = '';
  realItems = [];

  
  

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase, db: AngularFirestore) {
      
    this.items = db.collection('forms').valueChanges();


  }

  DOSOMETHING() {
    console.log(this.items);
    this.items.subscribe(item => {
      console.log(item);
      const temp = Object.keys(item);
      for (const prop of temp) {
        this.realItems.push(temp[prop]);
      }
    });
 
  }



}
