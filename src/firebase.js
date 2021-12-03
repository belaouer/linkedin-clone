
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC-KRAS90pZDjuWieoEWnFVTi_sEyYn8WA",
    authDomain: "linkedin-clone-d52dd.firebaseapp.com",
    projectId: "linkedin-clone-d52dd",
    storageBucket: "linkedin-clone-d52dd.appspot.com",
    messagingSenderId: "742627324510",
    appId: "1:742627324510:web:cdeb107bd1aa0ab8cc7acf"
  };

  const firebaseApp = firebase.default.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}
