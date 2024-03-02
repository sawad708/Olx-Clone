import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/firestore'
import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyCYGOMqRaIBELk4N1GqPPM5iKXaoY1a9_g",
    authDomain: "olx-clone-96c8b.firebaseapp.com",
    projectId: "olx-clone-96c8b",
    storageBucket: "olx-clone-96c8b.appspot.com",
    messagingSenderId: "693105764238",
    appId: "1:693105764238:web:7cd85c1ee3680ab3b0a6df",
    measurementId: "G-C6QVTSYYFX"
  };

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
