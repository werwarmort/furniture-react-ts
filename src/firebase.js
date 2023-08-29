import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtg6leZco1aZQ2CeF43GvUkoCU0yCvsqU",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROGECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCHET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
console.log(firebaseConfig);
const app = initializeApp(firebaseConfig);
