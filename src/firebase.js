import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyArELGFEFm5_JbK7sNEih-LnHj3mi_mLkg",
    authDomain: "crud-udemy-firestore-b80ec.firebaseapp.com",
    projectId: "crud-udemy-firestore-b80ec",
    storageBucket: "crud-udemy-firestore-b80ec.appspot.com",
    messagingSenderId: "444549183674",
    appId: "1:444549183674:web:81f0ee24c4fc34a6c8aa83",
    measurementId: "G-5P919SVXZ8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export {auth, firebase}