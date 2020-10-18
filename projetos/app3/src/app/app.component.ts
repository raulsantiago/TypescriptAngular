import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit(): void {
    var firebaseConfig = {
    apiKey: "AIzaSyAoEjG29FonyaVaqOdr0-bgHRC1JXFgYPE",
    authDomain: "jsangular4instaclone.firebaseapp.com",
    databaseURL: "https://jsangular4instaclone.firebaseio.com",
    projectId: "jsangular4instaclone",
    storageBucket: "jsangular4instaclone.appspot.com",
    messagingSenderId: "628326362762",
    appId: "1:628326362762:web:0bec533968b4a8fcec0773",
    measurementId: "G-HXGYG4KPV1"
  };
    firebase.initializeApp(firebaseConfig)
  }


}
