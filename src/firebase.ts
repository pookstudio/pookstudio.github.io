import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUUJzcM-ZLfQaxZsWWvcxJqapHTN84bQU",
  authDomain: "taxi2thailand-c5cd8.firebaseapp.com",
  projectId: "taxi2thailand-c5cd8",
  storageBucket: "taxi2thailand-c5cd8.appspot.com",
  messagingSenderId: "812219962963",
  appId: "1:812219962963:web:67a5347030401a5940d8a6",
  measurementId: "G-SJX1C8GR70",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = app.firestore();
export default app;
