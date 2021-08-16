import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaOsRrrVPPsDMQgvC-WCQT1SzS4li0Dak",
  authDomain: "netflix-clone-fea0d.firebaseapp.com",
  projectId: "netflix-clone-fea0d",
  storageBucket: "netflix-clone-fea0d.appspot.com",
  messagingSenderId: "174549300998",
  appId: "1:174549300998:web:830b211d71f80a00105087"
};


const firebaseApp= firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth};

export default db;
