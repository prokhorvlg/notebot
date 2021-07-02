import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDdCjbP7lQVb7--7uraYnkEdLGjWTmWckE",
  authDomain: "notebot-42.firebaseapp.com",
  databaseURL: "https://notebot-42.firebaseio.com",
  projectId: "notebot-42",
  storageBucket: "notebot-42.appspot.com",
  messagingSenderId: "884273569921",
  appId: "1:884273569921:web:e56bf1258d353e4ae02d80",
  measurementId: "G-7B4K7B82XL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
