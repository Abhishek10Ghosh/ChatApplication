
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCl1DEiWwZN9OOhsEOHJu7GX2_SdzgIMNc",
  authDomain: "chat-df7d9.firebaseapp.com",
  projectId: "chat-df7d9",
  storageBucket: "chat-df7d9.appspot.com",
  messagingSenderId: "536152748999",
  appId: "1:536152748999:web:e2f4797f95c0fcdaac1fe2"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();