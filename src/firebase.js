import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB9gTbblBH3dU4Ef_J9YbmEQaLyLpQnXX4",
    authDomain: "whatsappclone-86e07.firebaseapp.com",
    databaseURL: "https://whatsappclone-86e07.firebaseio.com",
    projectId: "whatsappclone-86e07",
    storageBucket: "whatsappclone-86e07.appspot.com",
    messagingSenderId: "815413148852",
    appId: "1:815413148852:web:57e47f581197ff89062be1",
    measurementId: "G-3X4PPXK9ZR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, provider };
export default db;
