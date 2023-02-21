
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDB63aS_FMdL86vufjHcmc2AzI4N1h8GKw",
  authDomain: "bookimage-9e8ca.firebaseapp.com",
  projectId: "bookimage-9e8ca",
  storageBucket: "bookimage-9e8ca.appspot.com",
  messagingSenderId: "869806859891",
  appId: "1:869806859891:web:346a138044f8e446942c06",
  measurementId: "G-Q56CWKBDX9"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
