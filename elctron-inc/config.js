import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyARR7KKMOiFfg487mpRVoGKA4iFsdzG_vw",
  authDomain: "elctron-inc.firebaseapp.com",
  projectId: "elctron-inc",
  storageBucket: "elctron-inc.appspot.com",
  messagingSenderId: "116107712720",
  appId: "1:116107712720:web:dada8605f19458e52aa6d5"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();