import * as firebase from 'firebase';
// import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA9iVtn0gvQgpetA9QCIYteU9Eq4Hsx48k",
    authDomain: "trackevent-b52e0.firebaseapp.com",
    databaseURL: "https://trackevent-b52e0.firebaseio.com",
    projectId: "trackevent-b52e0",
    storageBucket: "trackevent-b52e0.appspot.com",
    messagingSenderId: "733926844703",
    appId: "1:733926844703:web:28377fdbfee65541f9282a",
    measurementId: "G-KRB4XD0R9J"
  };

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;