import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFTacaex6Bs4DAKCKFQaecetd9U3vHjGg",
  authDomain: "bankapp-41a5a.firebaseapp.com",
  projectId: "bankapp-41a5a",
  storageBucket: "bankapp-41a5a.appspot.com",
  messagingSenderId: "851260336485",
  appId: "1:851260336485:web:61f11705f0b3a3a113d98c",
};

const app = initializeApp(firebaseConfig);

export default app;
