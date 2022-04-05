import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJxKdejt71z-P6MudEcizeQ4EpzTg4jhg",

  authDomain: "skisnowconf.firebaseapp.com",

  projectId: "skisnowconf",

  storageBucket: "skisnowconf.appspot.com",

  messagingSenderId: "1039606985511",

  appId: "1:1039606985511:web:ff39e9de09b0461175af02",

  measurementId: "G-BFJC9T9L8Y"

}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();