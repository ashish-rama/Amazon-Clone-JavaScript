import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB9IaAqLHRCwBN8fyw12gOtZdtoaeIDvL0",
  authDomain: "ecomm-clone-8906a.firebaseapp.com",
  projectId: "ecomm-clone-8906a",
  storageBucket: "ecomm-clone-8906a.appspot.com",
  messagingSenderId: "920823129111",
  appId: "1:920823129111:web:45144aab984232e5c16852",
  measurementId: "G-PE882PM68D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };