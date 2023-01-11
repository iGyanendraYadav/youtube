// import { FirebaseApp } from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBq2hmyAgplMJ8-2NypLN5AaAUziWUIjlg",
    authDomain: "igyanendra.firebaseapp.com",
    projectId: "igyanendra",
    storageBucket: "igyanendra.appspot.com",
    messagingSenderId: "874961311365",
    appId: "1:874961311365:web:3b494d1144a689a4187bec"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.auth();