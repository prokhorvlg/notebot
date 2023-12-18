import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.APIKEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  databaseURL: import.meta.env.DATABASE_URL,
  projectId: import.meta.env.PROJECTID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGE_SENDER_ID,
  appId: import.meta.env.APP_ID,
  measurementId: import.meta.env.MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
