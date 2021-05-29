import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCX3IonkhyxC490lDV_Ed5r_w4AAMPGHTM",
    authDomain: "linkedin-clone-5f3b7.firebaseapp.com",
    projectId: "linkedin-clone-5f3b7",
    storageBucket: "linkedin-clone-5f3b7.appspot.com",
    messagingSenderId: "125952219600",
    appId: "1:125952219600:web:dacab229feb5921e1581d5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
  