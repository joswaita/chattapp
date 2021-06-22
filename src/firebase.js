import firebase from 'firebase/app';
import 'firebase/auth';


export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyC-NqaSY-Ri5JnFjMW3BZkMklhcgkg0Apk",
    authDomain: "chatt-80f6b.firebaseapp.com",
    projectId: "chatt-80f6b",
    storageBucket: "chatt-80f6b.appspot.com",
    messagingSenderId: "389304269303",
    appId: "1:389304269303:web:4931ecbbf8bcea72f816f2"
  }).auth();