import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDz-9n4MGz-nQLwT74RM_aEIABsnLI6860",
  authDomain: "complete-resturent.firebaseapp.com",
  projectId: "complete-resturent",
  storageBucket: "complete-resturent.firebasestorage.app",
  messagingSenderId: "472976397950",
  appId: "1:472976397950:web:0b1c4a000704364a06ea2f",
  measurementId: "G-X09PZF21Z9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
